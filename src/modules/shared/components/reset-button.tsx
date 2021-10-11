import { styled } from '@material-ui/styles';
import { Button } from '@mui/material';

// todo: move value to theme!
const HeightItem = 57;

export const ResetButton = styled(Button)(() => ({
    width: '180px',
    height: HeightItem,
    color: '#F65261',
    borderColor: '#F65261',
    '&:hover': {
        borderColor: '#F65261',
    },
}));
