import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Content } from './modules/home-page/components/content/content';
import { Header } from './modules/home-page/components/header/header';
import { MainLogo } from './modules/home-page/components/shared/main-logo';

import movies from './assets/data/movies.json';
import { ContentContainer } from './modules/home-page/containers/content-container';

//todo: move code to home page container ? and appply search!
function App() {
    const filteredMovies = movies.slice(1, 100);

    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
            <Grid item xs={12}>
                <Header
                    onAddMovieClick={() => console.log('try add')}
                    onSearchClick={() => console.log('try search')}
                />
            </Grid>
            <Grid item xs={12}>
                <ContentContainer
                    movies={movies ? movies.slice(1, 100) : []}
                />
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ marginLeft: '50%' }}>
                    <MainLogo />
                </Box>
            </Grid>
        </Grid>
    );
}

export default App;
