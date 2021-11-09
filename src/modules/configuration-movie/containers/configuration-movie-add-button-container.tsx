import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { initialMovieConfig, MovieConfig } from 'shared/types/movies';
import { AddMovieButton } from '../components/configuration-movie-add-button';
import { configurationGenres } from 'shared/types/genres';
import {
    CleanMovieConfigAction,
    cleanMovieConfigAction,
    editMovieConfigAction,
    EditMovieConfigAction,
    EditMovieConfigPayload,
    saveNewMovieConfigAction,
    SaveNewMovieConfigAction,
    SaveNewMovieConfigPayload,
} from '../actions/actions';
import { AppState } from 'shared/types/store';
import { connect } from 'react-redux';
import { ConfigurationMovieWithValidation } from '../components/configuration-movie-with-validation';
import { InputValues } from 'shared/types/input-values';
import { useFormik } from 'formik';
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

const mapStateToProps = (state: AppState) => ({
    draftConfig: state.draftMovieConfig.draftConfig,
});

const mapDispatchToProps = {
    editDraftConfig: editMovieConfigAction,
    saveNewMovie: saveNewMovieConfigAction,
    cleanMovieConfig: cleanMovieConfigAction,
};

export const ConfigrationMovieAddButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddMovieButtonComponentContainer);