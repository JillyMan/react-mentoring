import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    Box,
    Grid,
    CardMedia,
    CardContent,
    Card,
    Rating,
    Typography,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    SpeedDialProps,
} from '@mui/material';
import { styled } from '@mui/system';
import { ConfigurationMovieDelete } from './configuration-movie-delete-container';
import { ConfigurationMovieEdit } from './configuration-movie-edit-container';
import { MovieConfig } from 'shared/types/movies';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

interface Props {
    hidden: boolean;
    movie: MovieConfig;
}

export const ConfigurationMovieSpeedDialContainer = ({ hidden, movie }: Props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    return (
        <Box sx={{ position: 'relative' }}>
            <StyledSpeedDial
                ariaLabel='Movie Actions'
                hidden={hidden}
                icon={<SpeedDialIcon />}
                direction={'up'}
            >
                <SpeedDialAction
                    key='Edit'
                    icon={<EditIcon />}
                    tooltipTitle={'Edit'}
                    onClick={() => setShowEdit(true)}
                />
                <SpeedDialAction
                    key='Delete'
                    icon={<DeleteIcon />}
                    tooltipTitle={'Delete'}
                    onClick={() => setShowDelete(true)}
                />
            </StyledSpeedDial>
            <ConfigurationMovieDelete
                show={showDelete}
                movie={movie}
                onCloseModal={() => setShowDelete(false)}
                onSubmitClick={() => console.log('delete movie')}
            />
            <ConfigurationMovieEdit
                show={showEdit}
                movie={movie}
                onCloseModal={() => setShowEdit(false)}
                onSubmitClick={() => console.log('edit movie')}
            />
        </Box>
    );
};
