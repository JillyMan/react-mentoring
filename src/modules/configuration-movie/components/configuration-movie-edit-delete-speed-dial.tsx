import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, SpeedDialAction, SpeedDialIcon, Modal } from '@mui/material';
import { ConfigurationMovieDeleteDialog } from './configuration-movie-delete-dialoge';
import { MovieConfig } from 'shared/types/movies';
import { configurationGenres } from 'shared/types/genres';
import { ConfigurationMovie } from './configuration-movie';
import { ConfigurationSpeedDial } from './configuration-movie-speed-dial';

interface Props {
    hidden: boolean;
    movie: MovieConfig;

    onDeleteMovie: (id: number) => void;
    onUpdateMovie: (movei: MovieConfig) => void;
}

export const ConfigurationMovieSpeedDial = ({
    hidden,
    movie,
    onDeleteMovie,
    onUpdateMovie,
}: Props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const onHandleUpdateMovie = (newConfig: MovieConfig) => {
        setShowEdit(false);
        onUpdateMovie(newConfig);
    };

    const onHandleDeleteMovie = () => {
        setShowDelete(false);
        onDeleteMovie(movie.id);
    };

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

            <ConfigurationMovieDeleteDialog
                show={showDelete}
                onClose={() => setShowDelete(false)}
                onSubmitClick={onHandleDeleteMovie}
            />

            <Modal open={showEdit} onClose={() => setShowEdit(false)}>
                <ConfigurationMovie
                    configTitle='EDIT'
                    avaliableGenres={configurationGenres}
                    movieConfig={movie}
                    onSubmitClick={onHandleUpdateMovie}
                />
            </Modal>
        </Box>
    );
};
