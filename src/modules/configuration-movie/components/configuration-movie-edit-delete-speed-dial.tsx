import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, SpeedDialAction, SpeedDialIcon, Modal } from '@mui/material';
import { ConfigurationMovieDeleteDialog } from './configuration-movie-delete-dialoge';
import { MovieConfig } from 'shared/types/movies';
import { configurationGenres } from 'shared/types/genres';
import { ConfigurationMovie } from './configuration-movie';
import { ConfigurationSpeedDial } from './configuration-movie-speed-dial';
import { ConfigurationMovieWithValidation } from './configuration-movie-with-validation';
import { ConfigurationMovieDeleteDialogContainer } from '../containers/configuration-movie-delete-dialog-container';
import { ConfigurationMovieUpdateContainer } from '../containers/configuration-movie-edit-container';

interface Props {
    hidden: boolean;
    movie: MovieConfig;
}

export const ConfigurationMovieSpeedDial = ({ hidden, movie }: Props) => {
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

            <ConfigurationMovieDeleteDialogContainer
                id={movie.id}
                show={showDelete}
                onCloseDialog={() => setShowDelete(false)}
            />

            <Modal open={showEdit} onClose={() => setShowEdit(false)}>
                <ConfigurationMovieUpdateContainer id={movie.id} />

                {/* <ConfigurationMovieWithValidation
                    configTitle='EDIT'
                    avaliableGenres={configurationGenres}
                    movieConfig={movie}
                    onSubmitClick={onHandleUpdateMovie}

                    // onKeyValueChange={handleKeyValueChange}
                    // onResetClick={() => cleanMovieConfig()}
                    // onSubmitClick={onSubmitHandle}
                /> */}
            </Modal>
        </Box>
    );
};
