import { call, put, takeEvery } from '@redux-saga/core/effects';
import { getMovies } from 'shared/services/movies-services';
import { MovieConfig } from 'shared/types/movies';
import { PagedList } from 'shared/types/paged-list';
import {
    LoadMoviesWithQueryAction,
    LOAD_MOVIES_WITH_QUERY,
    storeMoviesAction,
} from '../actions/actions';

function* handleLoadMovies(action: LoadMoviesWithQueryAction) {
    try {
        const { offset, limit, genresFilter, sortBy, sortOrder } = action.payload;
        const moviesInfo: PagedList<MovieConfig> = yield call(
            getMovies,
            offset,
            limit,
            sortBy,
            sortOrder,
            genresFilter,
        );

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

export function* loadMoviesSaga() {
    yield takeEvery(LOAD_MOVIES_WITH_QUERY, handleLoadMovies);
}
