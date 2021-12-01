import React from 'react';
import { hydrate } from 'react-dom';
import App from './app-react';
import { configureStore } from 'store/store';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
store.runSagas();

hydrate(
    <App store={store.store} Router={BrowserRouter} />,
    document.getElementById('root'),
);
