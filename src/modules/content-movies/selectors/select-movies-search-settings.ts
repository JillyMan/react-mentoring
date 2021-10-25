import { AppState } from 'shared/types/store';
import { MoviesSearchSettings } from '../types/movies-state';

export const selectMoviesSearchSettings = (state: AppState): MoviesSearchSettings =>
    state.movies.searchSettings;
