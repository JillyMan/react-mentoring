import React, { useState, useEffect } from 'react';
import { LinearProgress, Box } from '@mui/material';
import { MovieConfig, initialMovieConfig } from 'shared/types/movies';
import { MovieDetails } from '../components/movie-details';
import { getMovie } from 'shared/services/movies-services';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const useMovie = (movieId: number) => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(initialMovieConfig);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getMovie(movieId).then((result) => {
                setMovie(result);
                setLoading(false);
            });
        }, 1000);
    }, [movieId]);

    return {
        isLoading: loading,
        movie: movie,
    };
};

export const MovieDetailsContainer = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const status = useMovie(Number(movieId));
    const [searchParams] = useSearchParams();

    return status.isLoading ? (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    ) : (
        <MovieDetails
            movie={status.movie}
            onClose={() => navigate(`/search?${searchParams.toString()}`)}
        />
    );
};
