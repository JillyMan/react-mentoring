import React from 'react';
import SearchBox from './search';
import { Box, Grid, Paper } from '@mui/material';
import { MainLogo } from 'modules/shared/components/main-logo';
import { ConfigrationMovieAddButtonContainer } from 'modules/configuration-movie/containers/configuration-movie-add-button-container';
import BackgroundImage from 'assets/imges/header-bg.png';

interface Props {
    searchValue: string;
    onSearchClick: (search: string) => void;
}

const styles = {
    paperContainer: {
        backgroundImage: `url(${BackgroundImage})`,
        opacity: 1.0,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    },
    searchTitle: {
        fontFamily: 'Montserrat',
        fontWeight: 300,
        fontSize: '40px',
        lineHeight: '49px',
    },
};

export const Header = ({ searchValue, onSearchClick }: Props) => {
    return (
        <Paper style={styles.paperContainer}>
            <Box sx={{ width: '100%' }}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={1} />
                    <Grid item xs={8}>
                        <MainLogo />
                    </Grid>
                    <Grid item xs={2}>
                        <ConfigrationMovieAddButtonContainer />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={12} sx={{ marginLeft: '150px' }}>
                        <p style={styles.searchTitle}>FIND YOUR MOVIE</p>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ marginLeft: '150px', marginBottom: '100px' }}
                    >
                        <SearchBox
                            searchValue={searchValue}
                            text='What do your want to watch?'
                            onSearchClick={(s: string) => onSearchClick(s)}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};
