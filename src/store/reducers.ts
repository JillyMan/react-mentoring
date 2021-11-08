import { combineReducers } from 'redux';
import { moviesReducer } from 'modules/content-movies/reducers/movies-reducer';
import { movieConfigurationReducer } from 'modules/configuration-movie/reducers/movie-reducer';

export const rootAppReducer = combineReducers({
    movies: moviesReducer,
    draftMovieConfig: movieConfigurationReducer,
});
