import React from 'react';
import { hydrate } from 'react-dom';
import App from './app-react';
import { configureStore } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { ConstructionOutlined } from '@mui/icons-material';
import { AppState } from 'shared/types/store';
import { Store } from 'redux';

const store = configureStore(window.PRELOADED_STATE);
store.runSagas();

declare global {
    interface Window {
        PRELOADED_STATE: AppState;
    }
}

hydrate(
    <App store={store.store} Router={BrowserRouter} />,
    document.getElementById('root'),
);
