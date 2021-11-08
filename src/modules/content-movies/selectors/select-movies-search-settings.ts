import { MoviesSearchFilter } from 'shared/types/movies';
import { AppState } from 'shared/types/store';

export const selectMoviesSearchSettings = (state: AppState): MoviesSearchFilter =>
    state.movies.searchSettings;
