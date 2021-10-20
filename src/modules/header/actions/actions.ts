import { MovieConfig } from 'shared/types/movies';
import { Action } from 'shared/types/store';
import { createAction } from 'shared/utils/store/create-action';

export const ADD_MOVIE = 'ADD_MOVIE';

export interface AddMoviePayload {
    config: MovieConfig;
}

export type AddMovieAction = Action<typeof ADD_MOVIE, AddMoviePayload>;

export const addMovieAction = createAction<AddMovieAction, AddMoviePayload>(ADD_MOVIE);
