import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SearchBox } from './search';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Logo } from './logo';

interface Props { 
    onAddMovieClick: () => void;
    onSearchClick: (search: string) => void;
}

export const Header = ({ 
    onAddMovieClick, 
    onSearchClick 
}: Props) => {
    return (
        <Box sx={{width: '100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={1}/>
                <Grid item xs={8}>
                    <Logo boldText='netflix' text='roulette' />
                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{ 
                            width: 177, 
                            height: 46,
                            marginTop: '22px'
                        }} 
                        onClick={() => onAddMovieClick()}> Add Movie
                    </Button>
                </Grid>
                <Grid item xs={1}/>

                <Grid item xs={12} sx={{marginLeft: '150px'}}>
                    <p style={{
                        fontFamily: "Montserrat",
                        fontWeight: 300,
                        fontSize: '40px',
                        lineHeight: '49px',
                        textTransform: 'uppercase',
                    }}>FIND YOUR MOVIE</p>
                </Grid>
                <Grid item xs={12} sx={{marginLeft: '150px'}}>
                    <SearchBox
                        text="What do your want to watch?"
                        onSearchClick={(s) => onSearchClick(s)}/>
                </Grid>
            </Grid>
        </Box>
    );
}