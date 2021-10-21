import { call, takeEvery } from '@redux-saga/core/effects';
import { addMovie, updateMovie } from 'shared/services/movies-services';
import {
    SaveNewMovieConfigAction,
    SAVE_NEW_MOVIE_CONFIG,
    UpdateMovieConfigAction,
    UPDATE_MOVIE_CONFIG,
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

export function* saveNewMovieSaga() {
    yield takeEvery(SAVE_NEW_MOVIE_CONFIG, handleSaveNewMovieConfig);
}

export function* updateMovieSaga() {
    yield takeEvery(UPDATE_MOVIE_CONFIG, handleUpdateMovieConfig);
}
