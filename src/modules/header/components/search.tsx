import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { SumbitButton } from 'modules/shared/components/submit-button';
import { Input } from 'modules/shared/components/input';

const HeightItem = 57;

interface Props {
    text: string;
    onSearchClick: (search: string) => void;
}

export const SearchBox = ({ text, onSearchClick }: Props) => {
    const [seachText, setSearchText] = useState('');

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Input
                    id='outlined-search'
                    label={text}
                    type='search'
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </Grid>
            <Grid item xs={4}>
                <SumbitButton
                    sx={{ width: '233px' }}
                    variant='contained'
                    onClick={() => onSearchClick(seachText)}
                >
                    SEARCH
                </SumbitButton>
            </Grid>
        </Grid>
    );
};
