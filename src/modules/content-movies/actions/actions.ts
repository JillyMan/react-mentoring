import { MovieConfig, MoviesSearchFilter } from 'shared/types/movies';
import { Action } from 'shared/types/store';
import { createAction } from 'shared/utils/store/create-action';

export const LOAD_MOVIES_WITH_QUERY = 'LOAD_MOVIES_WITH_QUERY';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const STORE_MOVIES = 'STORE_MOVIES';
export const DELETE_MOVIE_CONFIG = 'DELETE_MOVIE';

export interface LoadMoviesQueryPayload {
    searchFilter: MoviesSearchFilter;
}
export interface DeleteMovieConfigPayload {
    id: number;
}

export type DeleteMovieConfigActon = Action<
    typeof DELETE_MOVIE_CONFIG,
    DeleteMovieConfigPayload
>;

export interface ClearMoviesPayload {}

export interface StoreMoviesPayload {
    movies: MovieConfig[];
    totalAmount: number;
}

export type LoadMoviesWithQueryAction = Action<
    typeof LOAD_MOVIES_WITH_QUERY,
    LoadMoviesQueryPayload
>;

export type StoreMoviesAction = Action<typeof STORE_MOVIES, StoreMoviesPayload>;
export type ClearMoviesAction = Action<typeof CLEAR_MOVIES, ClearMoviesPayload>;

export const clearMoviesAction = createAction<ClearMoviesAction, ClearMoviesPayload>(
    CLEAR_MOVIES,
);

export const loadMoviesAction = createAction<
    LoadMoviesWithQueryAction,
    LoadMoviesQueryPayload
>(LOAD_MOVIES_WITH_QUERY);

export const storeMoviesAction = createAction<StoreMoviesAction, StoreMoviesPayload>(
    STORE_MOVIES,
);

export const deleteMovieConfigAction = createAction<
    DeleteMovieConfigActon,
    DeleteMovieConfigPayload
>(DELETE_MOVIE_CONFIG);
