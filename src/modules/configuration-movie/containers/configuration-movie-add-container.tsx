import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { MovieConfig } from 'shared/types/movies';
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

interface StateProps {
    draftConfig: MovieConfig;
}

interface DispatchProps {
    editDraftConfig: (payload: EditMovieConfigPayload) => EditMovieConfigAction;
    cleanMovieConfig: () => CleanMovieConfigAction;
    saveNewMovie: (payload: SaveNewMovieConfigPayload) => SaveNewMovieConfigAction;
}

type Props = StateProps & DispatchProps;

const AddMovieButtonComponentContainer = ({
    draftConfig,
    editDraftConfig,
    cleanMovieConfig,
    saveNewMovie,
}: Props) => {
    const [open, setOpen] = useState(false);
    const onHandleClose = () => setOpen(false);
    const onHandleOpen = () => setOpen(true);

    const onSubmitHandle = () => {
        onHandleClose();
        saveNewMovie({ config: draftConfig });
    };

    const handleKeyValueChange = (key: string, value: InputValues) => {
        editDraftConfig({
            config: {
                ...draftConfig,
                [key]: value,
            },
        });
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
                <ConfigurationMovieWithValidation
                    configTitle='ADD'
                    avaliableGenres={configurationGenres}
                    movieConfig={draftConfig}
                    onKeyValueChange={handleKeyValueChange}
                    onResetClick={cleanMovieConfig}
                    onSubmitClick={onSubmitHandle}
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
