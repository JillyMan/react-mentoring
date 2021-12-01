import { END } from '@redux-saga/core';
import { createStore, Middleware, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { AppState } from 'shared/types/store';
import { rootAppReducer } from './reducers';
import { rootSaga, sagaMiddleware, startSagas } from './saga';

export const configureStore = (): Store<AppState> => {
    let middlewares: Middleware[] = [sagaMiddleware];

    const enchancers = composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootAppReducer, undefined, enchancers);
    //startSagas();

    return {
        store: store,
        runSagas: () => sagaMiddleware.run(rootSaga),
        close: () => store.dispatch(END),
    };
};
