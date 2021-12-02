import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app-react';
import { configureStore } from 'store/store';
import { StaticRouter } from 'react-router-dom/server';
import { loadMoviesAction } from 'modules/content-movies/actions/actions';

function renderHTML(html, preloadedState) {
    return `
        <!doctype html>
        <html>
          <head>
            <meta charset=utf-8>
            <title>React Server Side Rendering</title>
            <link href="/main.css" rel="stylesheet">
          </head>
          <body>
            <div id="root">${html}</div>
              <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
                    /</g,
                    '\\u003c',
                )}
              </script>
            <script src="/js/main.js"></script>
          </body>
        </html>
    `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();

        const renderRoot = () => (
            <App store={store.store} Router={StaticRouter} location={req.url} />
        );

        function renderApp() {
            const html = renderToString(renderRoot());
            const preloadedState = store.store.getState();
            res.send(renderHTML(html, preloadedState));
        }

        store
            .runSagas()
            .toPromise()
            .then(() => renderApp())
            .catch((err) => {
                throw err;
            });

        renderToString(renderRoot());

        return new Promise((resolve) => {
            store.store.dispatch(
                loadMoviesAction({
                    searchFilter: {
                        offset: 0,
                        limit: 8,
                        sortOrder: 'desc',
                    },
                }),
            );
            resolve(true);
        }).then(() => {
            store.close();
        });
    };
}
