import React from 'react';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { MovieInfo } from "../../../../shared/types/movies";
import { Grid, Typography } from '@mui/material';
import DefaultImage from '../../../../assets/imges/no-image.png';
import { Box } from '@mui/system';

interface Props {
    movie: MovieInfo;
}

export const MovieCard = ({ movie }: Props) => {
    const [imgUrl, setImgUrl] = React.useState(movie.poster_path);

    return (
        <Box sx={{ borderRadius: 16, boxShadow: 3 }}>
            <Card>
                <CardMedia
                    sx={{
                        justifyContent: 'center'
                    }}
                    component="img"
                    width="324px"
                    height="486px"
                    image={imgUrl}
                    alt="not found"
                    onError={() => setImgUrl(DefaultImage)} />
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
                    </Grid>
                </CardContent>
            </Card >
        </Box>
    );
}
