import React, { useState, useEffect } from 'react';
import { LinearProgress, Box } from '@mui/material';
import { MovieConfig, initialMovieConfig } from 'shared/types/movies';
import { MovieDetails } from '../components/movie-details';

interface Props {
    movie: MovieConfig;
    onClose: () => void;
}

const useMovie = (movieConfig: MovieConfig) => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(initialMovieConfig);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(true);
            setMovie(movieConfig);
        }, 3000);
    }, [movieConfig]);

    return {
        isLoading: loading,
        movie: movie,
    };
};

export const MovieDetailsContainer = ({ movie, onClose }: Props) => {
    const status = useMovie(movie);

    return status.isLoading ? (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    ) : (
        <MovieDetails movie={status.movie} onClose={onClose} />
    );
};
