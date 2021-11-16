import React, { useState } from 'react';
import { Box } from '@mui/material';
import { MainLogo } from './modules/shared/components/main-logo';
import { ContentMoviesContainer } from './modules/content-movies/containers/content-container';
import { HeaderContainer } from 'modules/header/containers/header-container';
import { MovieDetailsContainer } from 'modules/movie-details/containers/movie-details-container';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

const SearchLayout = () => {
    return (
        <>
            <Outlet />
            <ContentMoviesContainer />
            <Box sx={{ marginLeft: '50%' }}>
                <MainLogo />
            </Box>
        </>
    );
};

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to='/'>Go to the home page</Link>
            </p>
        </div>
    );
}
export const MainAppComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/search' />} />
            <Route path='/search' element={<SearchLayout />}>
                <Route index element={<HeaderContainer />} />
                <Route path='movie=:movieId' element={<MovieDetailsContainer />} />
            </Route>
            <Route path='*' element={<NoMatch />} />
        </Routes>
    );
};
