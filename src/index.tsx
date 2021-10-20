import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Provider } from 'react-redux';
import { configureStore } from 'store/store';

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={DateAdapter}>
            <Provider store={store}>
                <App />
            </Provider>
        </LocalizationProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
