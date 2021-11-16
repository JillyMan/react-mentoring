import { movieConfigNames } from 'shared/types/movies';
import {
    ClearMoviesAction,
    CLEAR_MOVIES,
    StoreMoviesAction,
    STORE_MOVIES,
} from '../actions/actions';
import { MoviesState } from '../types/movies-state';

type Action =
    | StoreMoviesAction
    | ClearMoviesAction

const initialState: MoviesState = {
    movies: [],
    totalAmount: 0,
    searchSettings: {
        offset: 0,
        limit: 8,
        sortOrder: 'desc',
    },
};

export const moviesReducer = (
    state: MoviesState = initialState,
    action: Action,
): MoviesState => {
    switch (action.type) {
        case STORE_MOVIES: {
            return {
                ...state,
                movies: action.payload.movies,
            };
        }
        case CLEAR_MOVIES: {
            return {
                ...initialState,
                searchSettings: state.searchSettings,
            };
        }
        default:
            return state;
    }
};
