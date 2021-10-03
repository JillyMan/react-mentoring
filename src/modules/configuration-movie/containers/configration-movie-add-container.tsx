import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ConfigurationMovie } from '../components/configuration-movie';
import { initialMovieConfig, MovieConfig } from '../../../shared/types/movies';

const styles = {
    searchButton: {
        width: 150,
        height: 46,
        marginTop: '22px',
        color: '#F65261',
        borderColor: '#F65261',
        ':hover': {
            borderColor: '#F65261',
        },
    }
};

interface Props {
    avaliableGenres: string[];
    onSubmitClick: (movie: MovieConfig) => void;
}

export const AddMovieButtonContainer = ({ avaliableGenres, onSubmitClick }: Props) => {
    const [open, setOpen] = useState(false);
    const onHandleClose = () => setOpen(false);
    const onHandleOpen = () => setOpen(true);

    const onSubmitHandle = (movie: MovieConfig) => {
        onHandleClose();
        onSubmitClick(movie);
    }

    return (
        <>
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={styles.searchButton}
                onClick={onHandleOpen}
            >
                {' '}
                Add Movie
            </Button>
            <Modal
                open={open}
                onClose={onHandleClose}
            >
                <ConfigurationMovie
                    configTitle='ADD'
                    avaliableGenres={avaliableGenres}
                    movieConfig={initialMovieConfig}
                    onSubmitClick={onSubmitHandle}
                />
            </Modal>

        </>
    );
}
