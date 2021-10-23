import React from 'react';
import { connect } from 'react-redux';
import {
    deleteMovieConfigAction,
    DeleteMovieConfigActon,
    DeleteMovieConfigPayload,
} from '../actions/actions';
import { ConfigurationMovieDeleteDialog } from '../components/configuration-movie-delete-dialoge';

interface StateProps {}

interface DispatchProps {
    deleteMovieConfig: (payload: DeleteMovieConfigPayload) => DeleteMovieConfigActon;
}

interface OwnProps {
    id: number;
    show: boolean;
    onCloseDialog: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

const ConfigurationMovieDeleteComponentContainer = ({
    id,
    show,
    onCloseDialog,
    deleteMovieConfig,
}: Props) => {
    const handleSubmit = () => {
        onCloseDialog();
        deleteMovieConfig({ id });
    };

    return (
        <ConfigurationMovieDeleteDialog
            show={show}
            onClose={onCloseDialog}
            onSubmitClick={handleSubmit}
        />
    );
};

const mapDispatchToProps = {
    deleteMovieConfig: deleteMovieConfigAction,
};

export const ConfigurationMovieDeleteDialogContainer = connect<
    StateProps,
    DispatchProps,
    OwnProps
>(
    undefined,
    mapDispatchToProps,
)(ConfigurationMovieDeleteComponentContainer);
