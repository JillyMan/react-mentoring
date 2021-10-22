import React from 'react';
import { Grid } from '@mui/material';
import { MovieCardWithError } from './movie-card';
import { MovieConfig } from 'shared/types/movies';

interface Props {
    movies: MovieConfig[];
    onMovieClick: (movie: MovieConfig) => void;
    onDeleteMovie: (id: number) => void;
    onUpdateMovie: (movei: MovieConfig) => void;
}

export const Movies = ({ movies, onMovieClick, onDeleteMovie, onUpdateMovie }: Props) => {
    return (
        <Grid container rowSpacing={3} spacing={3}>
            {movies.map((movie, id) => (
                <Grid item xs={3} key={movie.id}>
                    <MovieCardWithError
                        onMovieClick={onMovieClick}
                        onDeleteMovie={onDeleteMovie}
                        onUpdateMovie={onUpdateMovie}
                        movie={movie}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
