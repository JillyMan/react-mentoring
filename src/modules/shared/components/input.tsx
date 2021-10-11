import { styled } from '@material-ui/styles';
import { TextField } from '@mui/material';

export const Input = styled(TextField)({
    '& label.Mui-focused': {
        color: 'rgba(50, 50, 50, 0.8)',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(50, 50, 50, 0.8)',
        },
    },
    width: '100%',
    // todo: move to theme!
    height: 57,
});
