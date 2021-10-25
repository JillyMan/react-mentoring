import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { allGenres } from 'shared/types/genres';
import { MovieConfig, movieConfigNames } from 'shared/types/movies';
import { AppState } from 'shared/types/store/app-state';
import {
    ClearMoviesAction,
    clearMoviesAction,
    loadMoviesAction,
    LoadMoviesQueryPayload,
    setFilterMoviesAction,
    SetSearchMoviesFilterAction,
    SetSearchMoviesFilterPayload,
    setSortMoviesAction,
    SetSortMoviesAction,
    SetSortMoviesPayload,
} from '../actions/actions';
import { ContentMovies } from '../components/content-movies';
import { MoviesSearchSettings } from '../types/movies-state';

const sortOptionsNames = {
    byDate: 'By date',
    byRating: 'By rating',
};

const sortOptions = [sortOptionsNames.byDate, sortOptionsNames.byRating];

const mapSortOptionToField = {
    'By date': movieConfigNames.release_date,
    'By rating': movieConfigNames.vote_average,
};

interface StateProps {
    movies: MovieConfig[] | null;
    search: MoviesSearchSettings;
}

interface DispatchProps {
    loadMovies: (payload: LoadMoviesQueryPayload) => void;
    clearMovies: () => ClearMoviesAction;
    setSortValue: (paylod: SetSortMoviesPayload) => SetSortMoviesAction;
    setSearchFilter: (
        paylod: SetSearchMoviesFilterPayload,
    ) => SetSearchMoviesFilterAction;
}

type Props = StateProps & DispatchProps;

export const ContentMoviesComponentContainer = ({
    movies,
    search,
    loadMovies,
    clearMovies,
    setSortValue,
    setSearchFilter,
}: Props) => {
    useEffect(() => {
        loadMovies({ ...search });

        return () => {
            clearMovies();
        };
    }, [search]);

    const handleGenreChange = (genre: string) => {
        setSearchFilter({
            searchBy: 'genres',
            option: genre != 'All' ? [genre] : [],
        });
    };

    const handleSortChange = (sort: string) => {
        setSortValue({
            sortField:
                sort === sortOptionsNames.byDate
                    ? movieConfigNames.release_date
                    : movieConfigNames.vote_average,
        });
    };

    const handleMovieClick = (movie: MovieConfig) => {
        console.log('open movie: ', movie.title);
    };

    return (
        <ContentMovies
            options={allGenres}
            selectedOption={
                search.genresFilter.length == 1 ? search.genresFilter[0] : 'All'
            }
            sortOptions={sortOptions}
            movies={movies || []}
            onSortOptionChanged={handleSortChange}
            onOptionChanged={handleGenreChange}
            onMovieClick={handleMovieClick}
        />
    );
};

const mapStateToProps = (state: AppState) => ({
    movies: state.movies.movies,
    search: state.movies.searchSettings,
});

const mapDispatchToProps = {
    loadMovies: loadMoviesAction,
    clearMovies: clearMoviesAction,
    setSortValue: setSortMoviesAction,
    setSearchFilter: setFilterMoviesAction,
};

export const ContentMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContentMoviesComponentContainer);
