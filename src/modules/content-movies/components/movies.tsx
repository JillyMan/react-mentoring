import React from 'react';
import { Grid } from '@mui/material';
import { MovieCardWithError } from './movie-card';
import { MovieConfig } from 'shared/types/movies';

interface Props {
    movies: MovieConfig[];
}

export const Movies = ({ movies }: Props) => {
    return (
        <Grid container rowSpacing={3} spacing={3}>
            {movies.map((value, id) => (
                <Grid item xs={3} key={id}>
                    <MovieCardWithError movie={value} />
                </Grid>
            ))}
        </Grid>
    );
};
