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

const INVALID_MOVIE_ID = 0;

export const MainAppComponent = () => {
    const [selectedMovieId, setSelectedMovieId] = useState(INVALID_MOVIE_ID);
    return (
        <>
            {selectedMovieId ? (
                <MovieDetailsContainer
                    movieId={selectedMovieId}
                    onClose={() => setSelectedMovieId(INVALID_MOVIE_ID)}
                />
            ) : (
                <HeaderContainer />
            )}
            <ContentMoviesContainer onMovieClick={(id) => setSelectedMovieId(id)} />
            <Box sx={{ marginLeft: '50%' }}>
                <MainLogo />
            </Box>
        </>
    );
};
