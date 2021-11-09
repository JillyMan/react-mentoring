import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { configurationGenres } from 'shared/types/genres';
import {
    cleanMovieConfigAction,
    editMovieConfigAction,
    loadMovieConfigAction,
    updateMovieConfigAction,
} from '../actions/actions';
import { AppState } from 'shared/types/store';
import { connect } from 'react-redux';
import { ConfigurationMovie } from '../components/configuration-movie';
import { MovieConfig } from 'shared/types/movies';

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
    onCloseModal: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

const ConfigurationMovieUpdateComponentContainer = ({
    id,
    draftConfig,
    onCloseModal,
    loadMovieConfig,
    updateMovieConfig,
}: Props) => {
    console.log(id);
    useEffect(() => {
        loadMovieConfig({ id });
    }, [id]);

    const handleSubmit = (config: MovieConfig) => {
        updateMovieConfig({ config });
        onCloseModal();
    };

    return draftConfig.id == id ? (
        <Modal open onClose={onCloseModal}>
            <ConfigurationMovie
                configTitle='EDIT'
                avaliableGenres={configurationGenres}
                movieConfig={draftConfig}
                onSubmitClick={handleSubmit}
            />
        </Modal>
    ) : (
        <></>
    );
};

export const ConfigurationMovieUpdateContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConfigurationMovieUpdateComponentContainer);
