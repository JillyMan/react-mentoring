import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { MovieConfig } from 'shared/types/movies';
import { ConfigurationMovieBox } from '../components/configuration-movie-box';

interface Props {
    show: boolean;
    movie: MovieConfig;
    onSubmitClick: (movie: MovieConfig) => void;

    onCloseModal: () => void;
}

export const ConfigurationMovieDelete = ({
    show,
    movie,
    onSubmitClick,
    onCloseModal,
}: Props) => {
    return (
        <>
            <Modal open={show} onClose={onCloseModal}>
                <ConfigurationMovieBox></ConfigurationMovieBox>
            </Modal>
        </>
    );
};
