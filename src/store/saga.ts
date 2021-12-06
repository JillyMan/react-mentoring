import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { moviesSagas } from 'modules/content-movies/sagas';
import { configurationMovieSagas } from 'modules/configuration-movie/sagas';

export function* rootSaga() {
    yield all([...moviesSagas, ...configurationMovieSagas].map((saga) => saga()));
}

export const sagaMiddleware = createSagaMiddleware();
export const startSagas = () => {
    sagaMiddleware.run(rootSaga);
};
