import { cleanMovieConfigAction, editMovieConfigAction } from "../actions/actions";
import { initialState, movieConfigurationReducer } from "./movie-reducer";

describe('configuration-page reducer', () => {
    test('set movie title', () => {
        const newTitle = 'Elden Ring';
        expect(
            movieConfigurationReducer(initialState,
                editMovieConfigAction({
                    config: {
                        ...initialState.draftConfig,
                        title: newTitle
                    } 
                })
            )
        ).toEqual({
            ...initialState,
            draftConfig: {
                ...initialState.draftConfig,
                title: newTitle
            },
            changed: true
        })
    });

    test('set config and clear movie config', () => {
        let state = movieConfigurationReducer(initialState,
            editMovieConfigAction({
                config: {
                    ...initialState.draftConfig,
                    title: 'test'
                } 
            })
        );

        expect(
            movieConfigurationReducer(state,
                cleanMovieConfigAction()
            )
        ).toEqual(initialState);
    });
})
