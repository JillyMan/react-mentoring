import React from 'react';
import { CardMedia } from '@mui/material';
import { WithDefaultImage } from './with-default-img';

export const CardMediaWithDefaultImg = WithDefaultImage((props) => (
    <CardMedia
        component='img'
        height='600px'
        image={props.url}
        alt='not found'
        onError={props.onError}
    />
));
