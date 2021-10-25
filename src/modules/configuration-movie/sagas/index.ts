import {
    loadMovieConfigSaga,
    saveNewMovieConfigSaga,
    updateMovieConfigSaga,
} from './configuration-movie-saga';

export const configurationMovieSagas = [
    saveNewMovieConfigSaga,
    updateMovieConfigSaga,
    loadMovieConfigSaga,
];
