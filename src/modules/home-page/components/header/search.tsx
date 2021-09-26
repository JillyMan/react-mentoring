import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const HeightItem = 57;
const BackgroundColor = '#F65261';

interface Props {
    text: string;
    onSearchClick: (search: string) => void;
}

export const SearchBox = ({ text, onSearchClick }: Props) => {
    const [seachText, setSearchText] = useState('');

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField
                    id="outlined-search"
                    label={text}
                    type="search"
                    onChange={(e) => setSearchText(e.target.value)}
                    sx={{
                        width: '100%',
                        height: HeightItem,
                        background: 'rgba(50, 50, 50, 0.8)',
                        // todo: doesn't work, don't forget to fix it!!
                        ':focus': {
                            borderColor: BackgroundColor,
                            outlineColor: 'white'
                        },
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <Button
                    variant="contained"
                    onClick={() => onSearchClick(seachText)}
                    sx={{
                        width: '40%',
                        height: HeightItem,
                        background: BackgroundColor,
                        ':hover': { background: BackgroundColor },
                    }}
                >
                    SEARCH
                </Button>
            </Grid>
        </Grid>
    );
};
