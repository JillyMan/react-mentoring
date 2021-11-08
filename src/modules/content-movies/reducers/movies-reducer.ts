import { movieConfigNames } from 'shared/types/movies';
import {
    ClearMoviesAction,
    CLEAR_MOVIES,
    SetSearchMoviesFilterAction,
    SetSearchMoviesFilterPayload,
    SetSortMoviesAction,
    SET_SEARCH_MOVIES_FILTER,
    SET_SORT_MOVIES,
    StoreMoviesAction,
    STORE_MOVIES,
} from '../actions/actions';
import { MoviesState } from '../types/movies-state';

type Action =
    | StoreMoviesAction
    | ClearMoviesAction
    | SetSearchMoviesFilterAction
    | SetSortMoviesAction;

const initialState: MoviesState = {
    movies: [],
    totalAmount: 0,
    searchSettings: {
        offset: 0,
        limit: 8,
        sortBy: movieConfigNames.release_date,
        sortOrder: 'desc',
        searchValue: '',
        searchBy: 'genres',
        genresFilter: [],
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
        case SET_SEARCH_MOVIES_FILTER: {
            const { searchBy, option } = action.payload as SetSearchMoviesFilterPayload;

            return searchBy === 'genres'
                ? {
                      ...state,
                      searchSettings: {
                          ...state.searchSettings,
                          searchBy: 'genres',
                          genresFilter: option as string[],
                          searchValue: '',
                      },
                  }
                : {
                      ...state,
                      searchSettings: {
                          ...state.searchSettings,
                          searchBy: 'title',
                          searchValue: option as string,
                          genresFilter: [],
                      },
                  };
        }
        case SET_SORT_MOVIES: {
            return {
                ...state,
                searchSettings: {
                    ...state.searchSettings,
                    sortBy: action.payload.sortField,
                },
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
