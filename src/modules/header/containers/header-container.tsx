import React from 'react';
import { connect } from 'react-redux';
import { AddMovieAction, addMovieAction, AddMoviePayload } from '../actions';
import { Header } from '../components';
import {
    setFilterMoviesAction,
    SetSearchMoviesFilterAction,
    SetSearchMoviesFilterPayload,
} from 'modules/content-movies/actions/actions';
import { MovieConfig } from 'shared/types/movies';

interface Props {
    addMovie: (payload: AddMoviePayload) => AddMovieAction;
    setSearchFilter: (
        paylod: SetSearchMoviesFilterPayload,
    ) => SetSearchMoviesFilterAction;
}

const HeaderComponentContainer = ({ addMovie, setSearchFilter }: Props) => {
    const handleAddMovie = (config: MovieConfig) => {
        addMovie({ config });
    };

    const handleSearchClick = (search: string) => {
        setSearchFilter({
            searchBy: 'title',
            option: search,
        });
    };

    return <Header onAddMovie={handleAddMovie} onSearchClick={handleSearchClick} />;
};

const mapDispatchToProps = {
    addMovie: addMovieAction,
    setSearchFilter: setFilterMoviesAction,
};

export const HeaderContainer = connect(
    undefined,
    mapDispatchToProps,
)(HeaderComponentContainer);
