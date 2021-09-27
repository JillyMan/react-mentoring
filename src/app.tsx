import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Header } from './modules/home-page/components/header/header';
import { MainLogo } from './modules/home-page/components/shared/main-logo';
import moviesDB from './assets/data/movies.json';
import { ContentContainer } from './modules/home-page/containers/content-container';

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

function App() {
    const [filteredMovies, setMovies] = useState(moviesDB.slice(1, 100))

    const onHandleSearchClick = (searchText: string) => {
        let foundMovies = moviesDB.filter((f) => f.title.search(searchText) !== -1);
        foundMovies = foundMovies.slice(0, clamp(foundMovies.length, 0, 100));
        setMovies(foundMovies);
    }

    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
            <Grid item xs={12}>
                <Header
                    onAddMovieClick={() => console.log('try add')}
                    onSearchClick={onHandleSearchClick}
                />
            </Grid>
            <Grid item xs={12}>
                <ContentContainer
                    movies={filteredMovies}
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
