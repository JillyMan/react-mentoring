import React, { useState, useEffect } from 'react';
import { LinearProgress, Box } from '@mui/material';
import { MovieConfig } from 'shared/types/movies';
import { MovieDetails } from '../components/movie-details';

interface Props {
    movie: MovieConfig;
    onClose: () => void;
}

const useMovie = (movieConfig: MovieConfig) => {
    const [status, setStatus] = useState({
        loading: true,
        movie: movieConfig,
    });

    useEffect(() => {
        setStatus({ loading: true, movie: movieConfig });

        setTimeout(() => {
            setStatus({ loading: false, movie: movieConfig });
        }, 3000);
    }, [movieConfig.id]);

    return {
        isLoading: status.loading,
        movie: status.movie,
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
