import React from 'react';
import { WithDefaultImage } from './with-default-img';
import { styled } from '@mui/system';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const ImageWithDefaultImg = WithDefaultImage((props) => (
    <Img alt='not found' src={props.url} onError={props.onError} />
));
