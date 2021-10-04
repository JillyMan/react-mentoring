import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ConfigurationMovie } from '../components/configuration-movie';
import { initialMovieConfig, MovieConfig } from 'shared/types/movies';
import DeleteIcon from '@mui/icons-material/Delete';
import { SpeedDialAction } from '@mui/material';

interface Props {
    show: boolean;
    movie: MovieConfig;
    onSubmitClick: (movie: MovieConfig) => void;

    onCloseModal: () => void;
}

const ConfigurationMovieEditContainer = ({
    show,
    movie,
    onSubmitClick,
    onCloseModal,
}: Props) => {
    return <></>;
};

export const ConfigurationMovieEdit = ConfigurationMovieEditContainer;