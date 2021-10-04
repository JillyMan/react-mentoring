import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchBox from './search';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import BackgroundImage from '../../../../assets/imges/header-bg.png';
import Paper from '@mui/material/Paper';
import { MainLogo } from '../shared/main-logo';

interface Props {
    onAddMovieClick: () => void;
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
    searchButton: {
        width: 150,
        height: 46,
        marginTop: '22px',
        color: '#F65261',
        borderColor: '#F65261',
        ':hover': {
            borderColor: '#F65261',
        },
    },
};

export const Header = ({ onAddMovieClick, onSearchClick }: Props) => {
    return (
        <Paper style={styles.paperContainer} square>
            <Box sx={{ width: '100%' }}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={1} />
                    <Grid item xs={8}>
                        <MainLogo />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant='outlined'
                            startIcon={<AddIcon />}
                            sx={styles.searchButton}
                            onClick={() => onAddMovieClick()}
                        >
                            {' '}
                            Add Movie
                        </Button>
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
                            text='What do your want to watch?'
                            onSearchClick={(s: string) => onSearchClick(s)}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};
