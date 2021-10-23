import {
    deleteMovieSaga,
    loadMovieSaga,
    saveNewMovieSaga,
    updateMovieSaga,
} from './configuration-movie-saga';

export const configurationMovieSagas = [
    saveNewMovieSaga,
    updateMovieSaga,
    deleteMovieSaga,
    loadMovieSaga,
];
