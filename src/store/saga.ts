import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { moviesSagas } from 'modules/content-movies/sagas';

function* rootSaga() {
    yield all([...moviesSagas].map((saga) => saga()));
}

export const sagaMiddleware = createSagaMiddleware();
export const startSagas = () => {
    sagaMiddleware.run(rootSaga);
};
