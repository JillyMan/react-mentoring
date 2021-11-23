import { initialMovieConfig } from 'shared/types/movies';
import {
    CleanMovieConfigAction,
    CLEAN_MOVIE_CONFIG,
    EditMovieConfigAction,
    EDIT_MOVIE_CONFIG,
} from '../actions/actions';
import { ConfigurationMovieStore } from '../types/store/configuration-movie-store';

type Action = EditMovieConfigAction | CleanMovieConfigAction;

export const initialState: ConfigurationMovieStore = {
    draftConfig: initialMovieConfig,
    changed: false,
    loaded: false,
};

export const movieConfigurationReducer = (
    state: ConfigurationMovieStore = initialState,
    action: Action,
): ConfigurationMovieStore => {
    switch (action.type) {
        case EDIT_MOVIE_CONFIG: {
            return {
                draftConfig: {
                    ...action.payload.config,
                },
                loaded: action.payload.config.id != 0,
                changed: true,
            };
        }
        case CLEAN_MOVIE_CONFIG: {
            return initialState;
        }
        default:
            return state;
    }
};
