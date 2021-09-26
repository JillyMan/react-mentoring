import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const HeightItem = 57;

interface Props { 
    text: string;
    onSearchClick: (search: string) => void; 
}

export const SearchBox = ({ text, onSearchClick }: Props) => {
    const [seachText, setSearchText] = useState('');

    return (
        <Grid container spacing={2} >
            <Grid item xs={8}>
                <TextField
                    id="outlined-search" 
                    label={text} 
                    type="search"
                    onChange={(e) => setSearchText(e.target.value)} 
                    sx={{width: '100%', height: HeightItem }}/>
            </Grid>
            <Grid item xs={4}>
                <Button 
                    variant="contained"
                    onClick={() => onSearchClick(seachText)}
                    sx={{ width: '40%', height: HeightItem }}>
                        SEARCH
                </Button>
            </Grid>
        </Grid>
    )
}
