import { call, takeEvery, put } from '@redux-saga/core/effects';
import {
    addMovie,
    deleteMovie,
    getMovie,
    updateMovie,
} from 'shared/services/movies-services';
import { MovieConfig } from 'shared/types/movies';
import {
    DeleteMovieConfigActon,
    DELETE_MOVIE_CONFIG,
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

function* handleDeleteMovieConfig({ payload }: DeleteMovieConfigActon) {
    try {
        yield call(deleteMovie, payload.id);
    } catch (e) {
        console.log(e);
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

export function* saveNewMovieSaga() {
    yield takeEvery(SAVE_NEW_MOVIE_CONFIG, handleSaveNewMovieConfig);
}

export function* updateMovieSaga() {
    yield takeEvery(UPDATE_MOVIE_CONFIG, handleUpdateMovieConfig);
}

export function* deleteMovieSaga() {
    yield takeEvery(DELETE_MOVIE_CONFIG, handleDeleteMovieConfig);
}

export function* loadMovieSaga() {
    yield takeEvery(LOAD_MOVIE_CONFIG, handleLoadMovieConfig);
}
