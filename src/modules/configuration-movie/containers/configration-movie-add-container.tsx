import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ConfigurationMovie } from '../components/configuration-movie';
import { initialMovieConfig, MovieConfig } from 'shared/types/movies';
import { styled } from '@mui/system';
import { AddMovieButton } from '../components/movie-add-button';
import { configurationGenres } from 'shared/types/genres';

interface Props {
    onSubmitClick: (movie: MovieConfig) => void;
}

export const AddMovieButtonContainer = ({ onSubmitClick }: Props) => {
    const [open, setOpen] = useState(false);
    const onHandleClose = () => setOpen(false);
    const onHandleOpen = () => setOpen(true);

    const onSubmitHandle = (movie: MovieConfig) => {
        onHandleClose();
        onSubmitClick(movie);
    };

    return (
        <>
            <AddMovieButton
                variant='outlined'
                startIcon={<AddIcon />}
                onClick={onHandleOpen}
            >
                {' '}
                Add Movie
            </AddMovieButton>
            <Modal open={open} onClose={onHandleClose}>
                <ConfigurationMovie
                    configTitle='ADD'
                    avaliableGenres={configurationGenres}
                    movieConfig={initialMovieConfig}
                    onSubmitClick={onSubmitHandle}
                />
            </Modal>
        </>
    );
};
