import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { moviesSagas } from 'modules/content-movies/sagas';
import { headerSagas } from 'modules/header/sagas';

function* rootSaga() {
    yield all([...moviesSagas, ...headerSagas].map((saga) => saga()));
}

export const sagaMiddleware = createSagaMiddleware();
export const startSagas = () => {
    sagaMiddleware.run(rootSaga);
};
