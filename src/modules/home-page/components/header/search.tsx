import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const HeightItem = 57;
const BackgroundColor = '#F65261';

interface Props {
    text: string;
    onSearchClick: (search: string) => void;
}

const styles = {
    searchInputStyle: {
        width: '100%',
        height: HeightItem,
    },
    searchButton: {
        width: '40%',
        height: HeightItem,
        background: BackgroundColor,
        ':hover': { background: BackgroundColor },
    }
}


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'rgba(50, 50, 50, 0.8)',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(50, 50, 50, 0.8)',
        },
    },
});


export const SearchBox = ({ text, onSearchClick }: Props) => {
    const [seachText, setSearchText] = useState('');

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <CssTextField
                    id="outlined-search"
                    label={text}
                    type="search"
                    onChange={(e) => setSearchText(e.target.value)}
                    sx={styles.searchInputStyle}
                />
            </Grid>
            <Grid item xs={4}>
                <Button
                    variant="contained"
                    onClick={() => onSearchClick(seachText)}
                    sx={styles.searchButton}
                >
                    SEARCH
                </Button>
            </Grid>
        </Grid>
    );
};
