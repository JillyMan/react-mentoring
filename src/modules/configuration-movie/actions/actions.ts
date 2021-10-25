import { MovieConfig } from 'shared/types/movies';
import { Action } from 'shared/types/store';
import { createAction } from 'shared/utils/store/create-action';

export const EDIT_MOVIE_CONFIG = 'EDIT_MOVIE_CONFIG';
export const CLEAN_MOVIE_CONFIG = 'CLEAN_MOVIE_CONFIG';

export const LOAD_MOVIE_CONFIG = 'LOAD_MOVIE_CONFIG';
export const SAVE_NEW_MOVIE_CONFIG = 'SAVE_NEW_MOVIE_CONFIG';
export const UPDATE_MOVIE_CONFIG = 'UPDATE_MOVIE_CONFIG';

interface BasePayload {
    config: MovieConfig;
}

export interface EditMovieConfigPayload extends BasePayload {}
export interface CleanMovieConfigPayload {}
export interface SaveNewMovieConfigPayload extends BasePayload {}
export interface UpdateMovieConfigPayload extends BasePayload {}

export interface LoadMovieConfigPayload {
    id: number;
}

export type EditMovieConfigAction = Action<
    typeof EDIT_MOVIE_CONFIG,
    EditMovieConfigPayload
>;

export type CleanMovieConfigAction = Action<
    typeof CLEAN_MOVIE_CONFIG,
    CleanMovieConfigPayload
>;

export type SaveNewMovieConfigAction = Action<
    typeof SAVE_NEW_MOVIE_CONFIG,
    SaveNewMovieConfigPayload
>;

export type UpdateMovieConfigAction = Action<
    typeof UPDATE_MOVIE_CONFIG,
    UpdateMovieConfigPayload
>;

export type LoadMovieConfigActon = Action<
    typeof LOAD_MOVIE_CONFIG,
    LoadMovieConfigPayload
>;

export const editMovieConfigAction = createAction<
    EditMovieConfigAction,
    EditMovieConfigPayload
>(EDIT_MOVIE_CONFIG);

export const cleanMovieConfigAction = createAction<
    CleanMovieConfigAction,
    CleanMovieConfigPayload
>(CLEAN_MOVIE_CONFIG);

export const saveNewMovieConfigAction = createAction<
    SaveNewMovieConfigAction,
    SaveNewMovieConfigPayload
>(SAVE_NEW_MOVIE_CONFIG);

export const updateMovieConfigAction = createAction<
    UpdateMovieConfigAction,
    UpdateMovieConfigPayload
>(UPDATE_MOVIE_CONFIG);

export const loadMovieConfigAction = createAction<
    LoadMovieConfigActon,
    LoadMovieConfigPayload
>(LOAD_MOVIE_CONFIG);
