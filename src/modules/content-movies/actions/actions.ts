import { MovieConfig } from 'shared/types/movies';
import { Action } from 'shared/types/store';
import { createAction } from 'shared/utils/store/create-action';

export const LOAD_MOVIES_WITH_QUERY = 'LOAD_MOVIES_WITH_QUERY';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const STORE_MOVIES = 'STORE_MOVIES';

export const SET_SORT_MOVIES = 'SORT_MOVIES';
export const SET_SEARCH_MOVIES_FILTER = 'SET_SEARCH_MOVIES_FILTER';

export interface LoadMoviesQueryPayload {
    offset: number;
    limit: number;
    sortBy?: string;
    sortOrder?: 'desc' | 'asc';
    searchValue?: string;
    searchBy?: 'title' | 'genres';
    genresFilter?: string[];
}

export interface ClearMoviesPayload {}

export interface StoreMoviesPayload {
    movies: MovieConfig[];
    totalAmount: number;
}

export interface SetSearchMoviesFilterPayload {
    searchBy: 'title' | 'genres';
    option: string | string[];
}

export interface SetSortMoviesPayload {
    sortField: string;
}

export type LoadMoviesWithQueryAction = Action<
    typeof LOAD_MOVIES_WITH_QUERY,
    LoadMoviesQueryPayload
>;

export type StoreMoviesAction = Action<typeof STORE_MOVIES, StoreMoviesPayload>;
export type ClearMoviesAction = Action<typeof CLEAR_MOVIES, ClearMoviesPayload>;

export type SetSortMoviesAction = Action<typeof SET_SORT_MOVIES, SetSortMoviesPayload>;
export type SetSearchMoviesFilterAction = Action<
    typeof SET_SEARCH_MOVIES_FILTER,
    SetSearchMoviesFilterPayload
>;

export const clearMoviesAction = createAction<ClearMoviesAction, ClearMoviesPayload>(
    CLEAR_MOVIES,
);

export const loadMoviesAction = createAction<
    LoadMoviesWithQueryAction,
    LoadMoviesQueryPayload
>(LOAD_MOVIES_WITH_QUERY);

export const setSortMoviesAction = createAction<
    SetSortMoviesAction,
    SetSortMoviesPayload
>(SET_SORT_MOVIES);

export const setFilterMoviesAction = createAction<
    SetSearchMoviesFilterAction,
    SetSearchMoviesFilterPayload
>(SET_SEARCH_MOVIES_FILTER);

export const storeMoviesAction = createAction<StoreMoviesAction, StoreMoviesPayload>(
    STORE_MOVIES,
);
