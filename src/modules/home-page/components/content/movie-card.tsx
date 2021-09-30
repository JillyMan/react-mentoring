import React, { Component, ComponentType, useEffect } from 'react';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { MovieInfo } from "../../../../shared/types/movies";
import { Grid, Rating, Typography } from '@mui/material';
import DefaultImage from '../../../../assets/imges/no-image.png';
import { Box } from '@mui/system';

interface Props {
    movie: MovieInfo;
}

export const MovieCard = ({ movie }: Props) => {
    const [imgUrl, setImgUrl] = React.useState(movie.poster_path);

    useEffect(() => {
        setImgUrl(movie.poster_path);
    }, [movie])

    return (
        <Box sx={{ borderRadius: 16, boxShadow: 3 }}>
            <Card>
                <CardMedia
                    component="img"
                    height="600px"
                    image={imgUrl}
                    alt="not found"
                    onError={() => setImgUrl(DefaultImage)}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={9} zeroMinWidth>
                            <Typography gutterBottom noWrap variant="h6" component="div">
                                {movie.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={2}>
                            <Typography gutterBottom variant="h6" component="div">
                                {new Date(movie.release_date).getFullYear()}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                {movie.genres.length == 2 ? movie.genres.join(' & ') : movie.genres.join(', ')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Rating
                                value={movie.vote_average / 2.0}
                                readOnly
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </Box>
    );
}

const WithError = (Component: ComponentType<Props>) => {
    return (props: Props) => {
        if (props.movie) {
            return <Component {...props} />;
        }

        return <h1>...Invalid movie info... (high order component test)</h1>
    }
}

export const MovieCardWithError = WithError(MovieCard);
