import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { MainLogo } from './modules/shared/components/main-logo';
import { ContentMoviesContainer } from './modules/content-movies/containers/content-container';
import { HeaderContainer } from 'modules/header/containers/header-container';
import { MovieDetailsContainer } from 'modules/movie-details/containers/movie-details-container';
import { Store } from 'redux';
import { AppState } from 'shared/types/store';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Provider } from 'react-redux';

interface Props {
    movieId: number | undefined;
}

export const MainAppComponent = ({ movieId }: Props) => {
    return (
        <>
            {movieId ? (
                <MovieDetailsContainer
                    movieId={movieId}
                    onClose={() => console.log('close details')}
                />
            ) : (
                <HeaderContainer />
            )}
            <ContentMoviesContainer />
            <Box sx={{ marginLeft: '50%' }}>
                <MainLogo />
            </Box>
        </>
    );
};
