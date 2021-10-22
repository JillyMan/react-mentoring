import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { MovieConfig } from 'shared/types/movies';
import { Box, IconButton, ButtonBase, Typography, Grid, Paper } from '@mui/material';
import { RuntimeInfo } from './runtime-info';
import { MainLogo, ImageWithDefaultImg } from 'modules/shared/components';
import { formatGenres } from 'modules/shared/format-genres';

interface Props {
    movie: MovieConfig;
    onClose: () => void;
}

export const MovieDetails = ({ movie, onClose }: Props) => {
    return (
        <Paper sx={{ p: 2, margin: 'auto', height: '500px', flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <MainLogo />
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label='search' onClick={onClose}>
                        <SearchIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <ButtonBase sx={{ width: '320px', height: '380px' }}>
                        <ImageWithDefaultImg url={movie.poster_path} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction='column' spacing={1}>
                        <Grid item container>
                            <Grid item>
                                <Typography gutterBottom variant='h2' component='h2'>
                                    {movie.title}
                                </Typography>
                            </Grid>
                            <Grid item sx={{ marginLeft: '5%', paddingTop: '20px' }}>
                                <Typography gutterBottom variant='h4' component='h4'>
                                    {'Rating: ' + movie.vote_average}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant='h5' component='h5'>
                                {formatGenres(movie.genres)}
                            </Typography>
                        </Grid>
                        <Grid item xs container>
                            <Grid item xs={1}>
                                <Typography gutterBottom variant='h5' component='h5'>
                                    {new Date(movie.release_date).getFullYear()}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography gutterBottom variant='h5' component='h5'>
                                    <RuntimeInfo runtime={movie.runtime} />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box style={{ maxHeight: '30vh', overflow: 'auto' }}>
                                <Typography gutterBottom variant='h6' component='h6'>
                                    {movie.overview}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};
