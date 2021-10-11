import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material';
import { SubmitButton } from 'modules/shared/components/submit-button';
import { ResetButton } from 'modules/shared/components/reset-button';

interface Props {
    show: boolean;
    onSubmitClick: () => void;
    onClose: () => void;
}

export const ConfigurationMovieDeleteDialog = ({
    show,
    onClose,
    onSubmitClick,
}: Props) => {
    return (
        <Dialog
            open={show}
            onClose={onClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle id='alert-dialog-title'>{'DELETE MOVIE'}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    Are you sure you want to delete this movie?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <ResetButton variant='outlined' onClick={onClose}>
                    DISAGREE
                </ResetButton>
                <SubmitButton variant='contained' onClick={onSubmitClick} autoFocus>
                    AGREE
                </SubmitButton>
            </DialogActions>
        </Dialog>
    );
};
