import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Header } from './modules/header/components/header';
import { MainLogo } from './modules/shared/components/main-logo';
import { ContentMoviesContainer } from './modules/content-movies/containers/content-container';

function App() {
    return (
        <>
            {/* {selectedMovie ? (
                <MovieDetailsContainer movie={selectedMovie} onClose={() => {}} />
            ) : (
            )} */}
            <Header onAddMovieClick={() => {}} onSearchClick={() => {}} />
            <ContentMoviesContainer />
            <Box sx={{ marginLeft: '50%' }}>
                <MainLogo />
            </Box>
        </>
    );
}

export default App;
