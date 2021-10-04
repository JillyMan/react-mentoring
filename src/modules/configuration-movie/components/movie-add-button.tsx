import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const AddMovieButton = styled(Button)(() => ({
    width: '177px',
    height: '46px',
    marginTop: '22px',
    color: '#F65261',
    borderColor: '#F65261',
    '&:hover': {
        borderColor: '#F65261',
    },
}));
