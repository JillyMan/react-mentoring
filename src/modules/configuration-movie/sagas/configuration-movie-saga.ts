import { call, takeEvery, put } from '@redux-saga/core/effects';
import { addMovie, getMovie, updateMovie } from 'shared/services/movies-services';
import { MovieConfig } from 'shared/types/movies';
import {
    LoadMovieConfigActon,
    LOAD_MOVIE_CONFIG,
    SaveNewMovieConfigAction,
    SAVE_NEW_MOVIE_CONFIG,
    UpdateMovieConfigAction,
    UPDATE_MOVIE_CONFIG,
    editMovieConfigAction,
} from '../actions/actions';

function* handleSaveNewMovieConfig({ payload }: SaveNewMovieConfigAction) {
    try {
        yield call(addMovie, payload.config);
    } catch (e) {
        console.log(e);
    }
}

function* handleUpdateMovieConfig({ payload }: UpdateMovieConfigAction) {
    try {
        yield call(updateMovie, payload.config);
    } catch (e) {
        console.error(e);
    }
}

function* handleLoadMovieConfig({ payload }: LoadMovieConfigActon) {
    try {
        const movieConfig: MovieConfig = yield call(getMovie, payload.id);
        yield put(editMovieConfigAction({ config: movieConfig }));
    } catch (e) {
        console.error(e);
    }
}

export function* saveNewMovieConfigSaga() {
    yield takeEvery(SAVE_NEW_MOVIE_CONFIG, handleSaveNewMovieConfig);
}

export function* updateMovieConfigSaga() {
    yield takeEvery(UPDATE_MOVIE_CONFIG, handleUpdateMovieConfig);
}

export function* loadMovieConfigSaga() {
    yield takeEvery(LOAD_MOVIE_CONFIG, handleLoadMovieConfig);
}
