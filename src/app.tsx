import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Header } from './modules/header/components/header';
import { MainLogo } from './modules/shared/components/main-logo';
import { getMovies, addMovie } from './shared/services/movies-services';
import { ContentContainer } from './modules/content-movies/containers/content-container';
import { MovieConfig } from './shared/types/movies';

const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

let moviesDB = getMovies();

function App() {
    const [filteredMovies, setMovies] = useState([
        moviesDB[0],
        null,
        ...moviesDB.slice(1, 50),
    ]);

    const onHandleSearchClick = (searchText: string) => {
        let foundMovies = moviesDB.filter((m) => m.title.search(searchText) !== -1);
        foundMovies = foundMovies.slice(0, clamp(foundMovies.length, 0, 100));
        setMovies(foundMovies);
    };

    const onHandleAddMovie = (movie: MovieConfig) => {
        addMovie(movie);
        moviesDB = getMovies();
        setMovies([moviesDB[0], null, ...moviesDB.slice(1, 50)]);
    };

    return (
        <>
            <Header
                onAddMovieClick={onHandleAddMovie}
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
