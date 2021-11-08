import { call, takeEvery, put, select } from '@redux-saga/core/effects';
//TODO: will be deleted when React-Routes will be added
import { loadMoviesAction } from 'modules/content-movies/actions/actions';
import { selectMoviesSearchSettings } from 'modules/content-movies/selectors/select-movies-search-settings';
// ----
import { addMovie, getMovie, updateMovie } from 'shared/services/movies-services';
import { MovieConfig, MoviesSearchFilter } from 'shared/types/movies';
import {
    LoadMovieConfigActon,
    LOAD_MOVIE_CONFIG,
    SaveNewMovieConfigAction,
    SAVE_NEW_MOVIE_CONFIG,
    UpdateMovieConfigAction,
    UPDATE_MOVIE_CONFIG,
    editMovieConfigAction,
    cleanMovieConfigAction,
} from '../actions/actions';

function* handleSaveNewMovieConfig({ payload }: SaveNewMovieConfigAction) {
    try {
        yield call(addMovie, payload.config);
        yield put(cleanMovieConfigAction());

        //TODO: will be deleted when React-Routes will be added
        const searchFilter: MoviesSearchFilter = yield select(selectMoviesSearchSettings);
        yield put(loadMoviesAction({ searchFilter }));
        // ---------------
    } catch (e) {
        console.error(e);
    }
}

function* handleUpdateMovieConfig({ payload }: UpdateMovieConfigAction) {
    try {
        yield call(updateMovie, payload.config);
        yield put(cleanMovieConfigAction());

        //TODO: will be deleted when React-Routes will be added.
        const searchFilter: MoviesSearchFilter = yield select(selectMoviesSearchSettings);
        yield put(loadMoviesAction({ searchFilter }));
        // ---------------
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
