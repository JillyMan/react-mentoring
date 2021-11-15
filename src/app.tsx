import React, { useState, useCallback } from 'react';
import { Store } from 'redux';
import { AppState } from 'shared/types/store';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Provider } from 'react-redux';
import { MainAppComponent } from 'main-app-component';
import { BrowserRouter } from 'react-router-dom';

interface AppProps {
    store: Store<AppState>;
}

export const App = ({ store }: AppProps) => {
    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <Provider store={store}>
                <BrowserRouter>
                    <MainAppComponent />
                </BrowserRouter>
            </Provider>
        </LocalizationProvider>
    );
};
