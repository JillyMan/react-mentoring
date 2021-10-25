import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { configureStore } from 'store/store';

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <App store={store} />
    </React.StrictMode>,
    document.getElementById('root'),
);
