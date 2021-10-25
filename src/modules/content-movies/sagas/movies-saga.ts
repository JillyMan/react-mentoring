import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { deleteMovie, getMovies } from 'shared/services/movies-services';
import { MovieConfig } from 'shared/types/movies';
import { PagedList } from 'shared/types/paged-list';
import {
    DeleteMovieConfigActon,
    DELETE_MOVIE_CONFIG,
    loadMoviesAction,
    LoadMoviesWithQueryAction,
    LOAD_MOVIES_WITH_QUERY,
    storeMoviesAction,
} from '../actions/actions';
import { selectMoviesSearchSettings } from '../selectors/select-movies-search-settings';
import { MoviesSearchSettings } from '../types/movies-state';

function* handleLoadMovies({ payload }: LoadMoviesWithQueryAction) {
    try {
        const { offset, limit } = payload;
        const moviesInfo: PagedList<MovieConfig> = yield call(getMovies, offset, limit, {
            sortBy: payload.sortBy,
            sortOrder: payload.sortOrder,
            genresFilter: payload.genresFilter,
            searchBy: payload.searchBy,
            searchValue: payload.searchValue,
        });

        yield put(
            storeMoviesAction({
                movies: moviesInfo.data,
                totalAmount: moviesInfo.totalAmount,
            }),
        );
    } catch (e) {
        console.error(e);
    }
}

function* handleDeleteMovieConfig({ payload }: DeleteMovieConfigActon) {
    try {
        yield call(deleteMovie, payload.id);
        const searchSettings: MoviesSearchSettings = yield select(
            selectMoviesSearchSettings,
        );
        yield put(loadMoviesAction({ ...searchSettings }));
    } catch (e) {
        console.error(e);
    }
}

export function* deleteMovieSaga() {
    yield takeEvery(DELETE_MOVIE_CONFIG, handleDeleteMovieConfig);
}

export function* loadMoviesSaga() {
    yield takeEvery(LOAD_MOVIES_WITH_QUERY, handleLoadMovies);
}
