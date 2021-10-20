import { combineReducers } from 'redux';
import { moviesReducer } from 'modules/content-movies/reducers/movies-reducer';

export const rootAppReducer = combineReducers({ movies: moviesReducer });
