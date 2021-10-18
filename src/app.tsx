import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Header } from './modules/header/components/header';
import { MainLogo } from './modules/shared/components/main-logo';
import {
    getMovies,
    addMovie,
    deleteMovie,
    updateMovie,
} from './shared/services/movies-services';
import { ContentMoviesContainer } from './modules/content-movies/containers/content-container';
import { MovieConfig } from './shared/types/movies';
import { MovieDetails } from 'modules/movie-details/components/movie-details';
import { MovieDetailsContainer } from 'modules/movie-details/containers/movie-details-container';

const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

let moviesDB = getMovies();

function App() {
    const [filteredMovies, setMovies] = useState([...moviesDB.slice(0, 50)]);

    const [selectedMovie, setSelectedMovie] = useState<MovieConfig | null>(null);

    const handleSearchClick = (searchText: string) => {
        let foundMovies = moviesDB.filter((m) => m.title.search(searchText) !== -1);
        foundMovies = foundMovies.slice(0, clamp(foundMovies.length, 0, 50));
        setMovies(foundMovies);
    };

    const updateMovies = () => {
        moviesDB = getMovies();
        setMovies([...moviesDB.slice(0, 50)]);
    };

    const handleAddMovie = (movie: MovieConfig) => {
        addMovie(movie);
        updateMovies();
    };

    const handleDeleteMovie = (id: number) => {
        deleteMovie(id);
        updateMovies();
    };

    const handleUpdateMovie = (movie: MovieConfig) => {
        updateMovie(movie);
        updateMovies();
    };

    const handleMovieClick = (movie: MovieConfig) => {
        movie && setSelectedMovie(movie);
    };

    return (
        <>
            {selectedMovie ? (
                <MovieDetailsContainer
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            ) : (
                <Header
                    onAddMovieClick={handleAddMovie}
                    onSearchClick={handleSearchClick}
                />
            )}
            <ContentMoviesContainer
                onMovieClick={handleMovieClick}
                onDeleteMovie={handleDeleteMovie}
                onUpdateMovie={handleUpdateMovie}
                movies={filteredMovies}
            />
            <Box sx={{ marginLeft: '50%' }}>
                <MainLogo />
            </Box>
        </>
    );
}

export default App;
