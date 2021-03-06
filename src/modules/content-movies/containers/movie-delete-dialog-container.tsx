import React from 'react';
import { connect } from 'react-redux';
import {
    deleteMovieConfigAction,
    DeleteMovieConfigActon,
    DeleteMovieConfigPayload,
} from '../actions/actions';
import { ConfigurationMovieDeleteDialog } from '../components/movie-delete-dialoge';

interface StateProps {}

interface DispatchProps {
    deleteMovieConfig: (payload: DeleteMovieConfigPayload) => DeleteMovieConfigActon;
}

interface OwnProps {
    id: number;
    onCloseDialog: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

const MovieDeleteComponentContainer = ({
    id,
    onCloseDialog,
    deleteMovieConfig,
}: Props) => {
    const handleSubmit = () => {
        onCloseDialog();
        deleteMovieConfig({ id });
    };

    return (
        <ConfigurationMovieDeleteDialog
            show
            onClose={onCloseDialog}
            onSubmitClick={handleSubmit}
        />
    );
};

const mapDispatchToProps = {
    deleteMovieConfig: deleteMovieConfigAction,
};

export const MovieDeleteDialogContainer = connect<StateProps, DispatchProps, OwnProps>(
    undefined,
    mapDispatchToProps,
)(MovieDeleteComponentContainer);
