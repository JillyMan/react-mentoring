import React from 'react';
import { Store } from 'redux';
import { AppState } from 'shared/types/store';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Provider } from 'react-redux';
import { MainAppComponent } from 'main-app-component';
import { hot } from 'react-hot-loader';

interface AppProps {
    store: Store<AppState>;
    Router: any;
    location?: string;
}

const App = ({ store, location, Router }: AppProps) => {
    return (
        <Router location={location}>
            <LocalizationProvider dateAdapter={DateAdapter}>
                <Provider store={store}>
                    <MainAppComponent />
                </Provider>
            </LocalizationProvider>
        </Router>
    );
};

export default hot(module)(App);
