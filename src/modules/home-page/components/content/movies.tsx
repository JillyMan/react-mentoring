import React from 'react';
import { MovieInfo } from "../../../../shared/types/movies";
import { Grid } from '@mui/material';
import { MovieCard } from './movie-card';

interface Props {
    movies: MovieInfo[];
}

export const Movies = ({ movies }: Props) => {
    return (
        <Grid container rowSpacing={3} spacing={3}>
            {movies.map((value, id) => (
                <Grid item xs={3} key={id}>
                    <MovieCard movie={value} />
                </Grid>
            ))}
        </Grid>
    );
}