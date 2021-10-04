import { styled } from '@material-ui/styles';
import { Button } from '@mui/material';
import React from 'react';

// todo: move value to theme!
const HeightItem = 57;
const BackgroundColor = '#F65261';

export const SumbitButton = styled(Button)(() => ({
    height: HeightItem,
    width: '180px',
    background: BackgroundColor,
    '&:hover': { background: BackgroundColor },
}));
