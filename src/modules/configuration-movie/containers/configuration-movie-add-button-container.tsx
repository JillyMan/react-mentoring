import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { initialMovieConfig, MovieConfig } from 'shared/types/movies';
import { AddMovieButton } from '../components/configuration-movie-add-button';
import { configurationGenres } from 'shared/types/genres';
import {
    cleanMovieConfigAction,
    editMovieConfigAction,
    saveNewMovieConfigAction,
    SaveNewMovieConfigAction,
    SaveNewMovieConfigPayload,
} from '../actions/actions';
import { AppState } from 'shared/types/store';
import { connect } from 'react-redux';
import { ConfigurationMovie } from '../components/configuration-movie';

interface DispatchProps {
    saveNewMovie: (payload: SaveNewMovieConfigPayload) => SaveNewMovieConfigAction;
}

type Props = DispatchProps;

const AddMovieButtonComponentContainer = ({ saveNewMovie }: Props) => {
    const [open, setOpen] = useState(false);
    const onHandleClose = () => setOpen(false);
    const onHandleOpen = () => setOpen(true);

    const handleSaveConfig = (config: MovieConfig) => {
        saveNewMovie({ config });
        onHandleClose();
    };

    return (
        <>
            <AddMovieButton
                variant='outlined'
                startIcon={<AddIcon />}
                onClick={onHandleOpen}
            >
                Add Movie
            </AddMovieButton>
            <Modal open={open} onClose={onHandleClose}>
                <ConfigurationMovie
                    configTitle='ADD'
                    avaliableGenres={configurationGenres}
                    movieConfig={initialMovieConfig}
                    onSubmitClick={handleSaveConfig}
                />
            </Modal>
        </>
    );
};

const mapDispatchToProps = {
    saveNewMovie: saveNewMovieConfigAction,
};

export const ConfigrationMovieAddButtonContainer = connect(
    undefined,
    mapDispatchToProps,
)(AddMovieButtonComponentContainer);
