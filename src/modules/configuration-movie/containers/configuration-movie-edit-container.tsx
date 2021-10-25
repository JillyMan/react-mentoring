import React, { Dispatch, useEffect, useState } from 'react';
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
    loadMovieConfigAction,
    LoadMovieConfigActon,
    LoadMovieConfigPayload,
    saveNewMovieConfigAction,
    SaveNewMovieConfigAction,
    SaveNewMovieConfigPayload,
    UpdateMovieConfigAction,
    updateMovieConfigAction,
    UpdateMovieConfigPayload,
} from '../actions/actions';
import { AppState } from 'shared/types/store';
import { connect } from 'react-redux';
import { ConfigurationMovieWithValidation } from '../components/configuration-movie-with-validation';
import { InputValues } from 'shared/types/input-values';

const mapStateToProps = (state: AppState) => ({
    draftConfig: state.draftMovieConfig.draftConfig,
});

const mapDispatchToProps = {
    loadMovieConfig: loadMovieConfigAction,
    editDraftConfig: editMovieConfigAction,
    updateMovieConfig: updateMovieConfigAction,
    cleanMovieConfig: cleanMovieConfigAction,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

interface OwnProps {
    id: number;
    show: boolean;
    onCloseModal: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

const ConfigurationMovieUpdateComponentContainer = ({
    id,
    show,
    draftConfig,
    onCloseModal,
    loadMovieConfig,
    editDraftConfig,
    cleanMovieConfig,
    updateMovieConfig,
}: Props) => {
    useEffect(() => {
        loadMovieConfig({ id });
    }, [id]);

    const onSubmitHandle = () => {
        updateMovieConfig({ config: draftConfig });
        onCloseModal();
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
        <Modal open={show} onClose={onCloseModal}>
            <ConfigurationMovieWithValidation
                configTitle='EDIT'
                avaliableGenres={configurationGenres}
                movieConfig={draftConfig}
                onKeyValueChange={handleKeyValueChange}
                onResetClick={cleanMovieConfig}
                onSubmitClick={onSubmitHandle}
            />
        </Modal>
    );
};

export const ConfigurationMovieUpdateContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConfigurationMovieUpdateComponentContainer);
