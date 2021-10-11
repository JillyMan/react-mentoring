import React, { ComponentType, useEffect, useState } from 'react';
import {
    Box,
    Grid,
    CardMedia,
    CardContent,
    CardActionArea,
    Card,
    Rating,
    Typography,
} from '@mui/material';
import { MovieConfig } from 'shared/types/movies';
import { ConfigurationMovieSpeedDial } from 'modules/configuration-movie/components/configuration-movie-edit-delete-speed-dial';
import { formatGenres } from 'modules/shared/format-genres';
import { CardMediaWithDefaultImg } from 'modules/shared/components/card-media-with-default-img';

interface Props {
    movie: MovieConfig;
    onDeleteMovie: (id: number) => void;
    onMovieClick: (movie: MovieConfig) => void;
    onUpdateMovie: (movie: MovieConfig) => void;
}

export const MovieCard = ({
    movie,
    onMovieClick,
    onDeleteMovie,
    onUpdateMovie,
}: Props) => {
    const [imgUrl, setImgUrl] = useState(movie.poster_path);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setImgUrl(movie.poster_path);
    }, [movie]);

    return (
        <Box sx={{ borderRadius: 16, boxShadow: 3 }}>
            <Card onMouseOver={() => setHidden(false)} onMouseOut={() => setHidden(true)}>
                <CardActionArea onClick={() => onMovieClick(movie)}>
                    <CardMediaWithDefaultImg url={movie.poster_path} />
                </CardActionArea>
                <ConfigurationMovieSpeedDial
                    onDeleteMovie={onDeleteMovie}
                    onUpdateMovie={onUpdateMovie}
                    hidden={hidden}
                    movie={movie}
                />
                <CardActionArea onClick={() => onMovieClick(movie)}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={9} zeroMinWidth>
                                <Typography
                                    gutterBottom
                                    noWrap
                                    variant='h6'
                                    component='div'
                                >
                                    {movie.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={2}>
                                <Typography gutterBottom variant='h6' component='div'>
                                    {new Date(movie.release_date).getFullYear()}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body2' color='text.secondary'>
                                    {formatGenres(movie.genres)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Rating value={movie.vote_average / 2.0} readOnly />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

const WithError = (Component: ComponentType<Props>) => {
    return (props: Props) => {
        if (props.movie) {
            return <Component {...props} />;
        }

        return <h1>...Invalid movie config... (high order component test)</h1>;
    };
};

export const MovieCardWithError = WithError(MovieCard);
