import React, { useState } from 'react';
import { Box } from '@mui/material';
import { MainLogo } from './modules/shared/components/main-logo';
import { ContentMoviesContainer } from './modules/content-movies/containers/content-container';
import { HeaderContainer } from 'modules/header/containers/header-container';
import { MovieDetailsContainer } from 'modules/movie-details/containers/movie-details-container';
import { Route, Routes } from 'react-router';
import { viewMovieDetailsPath } from 'shared/utils/route-path';

const INVALID_MOVIE_ID = 0;

export const MainAppComponent = () => {
    const [selectedMovieId, setSelectedMovieId] = useState(INVALID_MOVIE_ID);
    return (
        <>
            <Routes>
                <Route
                    path={viewMovieDetailsPath.pattern}
                    element={<MovieDetailsContainer />}
                />
                <Route path={'/'} element={<HeaderContainer />} />
            </Routes>
            <ContentMoviesContainer />
            <Box sx={{ marginLeft: '50%' }}>
                <MainLogo />
            </Box>
        </>
    );
};
