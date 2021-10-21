import React, { ComponentType, forwardRef } from 'react';
import { InputValues } from 'shared/types/input-values';
import { MovieConfig } from 'shared/types/movies';
import { requiredFildsName } from '../types/configuration-movie-types';
import { ConfigurationMovie, ConfigurationMovieProps } from './configuration-movie';

interface Props {
    configTitle: 'ADD' | 'EDIT';
    movieConfig: MovieConfig;
    avaliableGenres: string[];

    onKeyValueChange: (key: string, value: InputValues) => void;
    onResetClick: () => void;
    onSubmitClick: () => void;
}

const requiredFildFilled = (
    filds: typeof requiredFildsName,
    movieConfig: MovieConfig,
) => {
    return filds.every((field) => !!movieConfig[field as keyof MovieConfig]);
};

const WithValidation = (Component: ComponentType<ConfigurationMovieProps>) => {
    return (props: Props) => {
        const submitButtonDisabled = !requiredFildFilled(
            requiredFildsName,
            props.movieConfig,
        );

        return (
            <Component
                configTitle={props.configTitle}
                avaliableGenres={props.avaliableGenres}
                movieConfig={props.movieConfig}
                submitDisabled={submitButtonDisabled}
                onSubmitClick={props.onSubmitClick}
                onResetClick={props.onResetClick}
                onKeyValueChange={props.onKeyValueChange}
            />
        );
    };
};

export const ConfigurationMovieWithValidation = forwardRef(
    WithValidation(ConfigurationMovie),
);
