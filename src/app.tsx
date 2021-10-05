import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Header } from './modules/home-page/components/header/header';
import { MainLogo } from './modules/home-page/components/shared/main-logo';
import moviesDB from './assets/data/movies.json';
import { ContentContainer } from './modules/home-page/containers/content-container';

const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

function App() {
    const [filteredMovies, setMovies] = useState([
        moviesDB[0],
        null,
        ...moviesDB.slice(1, 50),
    ]);

    const onHandleSearchClick = (searchText: string) => {
        let foundMovies = moviesDB.filter((f) => f.title.search(searchText) !== -1);
        foundMovies = foundMovies.slice(0, clamp(foundMovies.length, 0, 100));
        setMovies(foundMovies);
    };

    return (
        <>
            <Header
                onAddMovieClick={() => console.log('try add')}
                onSearchClick={onHandleSearchClick}
            />
            <ContentContainer movies={filteredMovies} />
            <Box sx={{ marginLeft: '50%' }}>
                <MainLogo />
            </Box>
        </>
    );
}

export default App;
