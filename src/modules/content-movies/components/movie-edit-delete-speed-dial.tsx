import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, SpeedDialAction, SpeedDialIcon, Modal } from '@mui/material';
import { ConfigurationSpeedDial } from '../../configuration-movie/components/configuration-movie-speed-dial';
import { MovieDeleteDialogContainer } from '../containers/movie-delete-dialog-container';
import { ConfigurationMovieUpdateContainer } from '../../configuration-movie/containers/configuration-movie-edit-container';

interface Props {
    movieId: number;
    hidden: boolean;
}

export const EditDeleteMovieSpeedDial = ({ hidden, movieId }: Props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    return (
        <Box sx={{ position: 'relative' }}>
            <ConfigurationSpeedDial
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
            </ConfigurationSpeedDial>

            {showDelete && (
                <MovieDeleteDialogContainer
                    id={movieId}
                    onCloseDialog={() => setShowDelete(false)}
                />
            )}

            {showEdit && (
                <ConfigurationMovieUpdateContainer
                    id={movieId}
                    onCloseModal={() => setShowEdit(false)}
                />
            )}
        </Box>
    );
};
