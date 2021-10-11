import React from 'react';
import { Box } from '@mui/material';

const boxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

interface Props {}

export const ConfigurationMovieBox: React.FunctionComponent<Props> = (props) => {
    return <Box sx={boxStyle}>{props.children}</Box>;
};
