import { call, takeEvery } from '@redux-saga/core/effects';
import { addMovie } from 'shared/services/movies-services';
import { AddMovieAction, ADD_MOVIE } from '../actions';

function* handleAddMovie({ payload }: AddMovieAction) {
    try {
        yield call(addMovie, payload.config);
    } catch (e) {
        console.error(e);
    }
}

export function* addMovieSaga() {
    yield takeEvery(ADD_MOVIE, handleAddMovie);
}
