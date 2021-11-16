import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { allGenres } from 'shared/types/genres';
import { MovieConfig, movieConfigNames, MoviesSearchFilter } from 'shared/types/movies';
import { AppState } from 'shared/types/store/app-state';
import { getSearchParams } from 'shared/utils/search-params';
import {
    ClearMoviesAction,
    clearMoviesAction,
    loadMoviesAction,
    LoadMoviesQueryPayload,
} from '../actions/actions';
import { ContentMovies } from '../components/content-movies';
import {} from '../types/movies-state';

const sortOptionsNames = {
    byDate: 'By date',
    byRating: 'By rating',
};

const sortOptions = [sortOptionsNames.byDate, sortOptionsNames.byRating];

interface StateProps {
    movies: MovieConfig[] | null;
    search: MoviesSearchFilter;
}

interface DispatchProps {
    loadMovies: (payload: LoadMoviesQueryPayload) => void;
    clearMovies: () => ClearMoviesAction;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

function transformSortOption(sort: string) {
    return sort === movieConfigNames.release_date
        ? sortOptionsNames.byDate
        : sortOptionsNames.byRating;
}

export const ContentMoviesComponentContainer = ({
    movies,
    search,
    loadMovies,
    clearMovies,
}: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const parsedSearchParams = useMemo(
        () => getSearchParams(searchParams),
        [searchParams],
    );

    useEffect(() => {
        loadMovies({
            searchFilter: {
                ...search,
                searchValue: parsedSearchParams.searchValue,
                sortBy: parsedSearchParams.sortBy,
                genresFilter: parsedSearchParams.genre ? [parsedSearchParams.genre] : [],
                searchBy: parsedSearchParams.searchValue ? 'title' : 'genres',
            },
        });

        return () => {
            clearMovies();
        };
    }, [searchParams]);

    const handleGenreChange = (genre: string) => {
        genre = genre == 'All' ? '' : genre;
        setSearchParams({
            ...parsedSearchParams,
            genre,
        });
    };

    const handleSortChange = (sort: string) => {
        setSearchParams({
            ...parsedSearchParams,
            sortBy:
                sort == sortOptionsNames.byDate
                    ? movieConfigNames.release_date
                    : movieConfigNames.vote_average,
        });
    };

    const handleMovieClick = (movie: MovieConfig) => {
        navigate(`movie=${movie.id}?${searchParams.toString()}`);
    };

    return (
        <ContentMovies
            options={allGenres}
            selectedOption={parsedSearchParams.genre || 'All'}
            selectedSortOption={
                parsedSearchParams.sortBy
                    ? transformSortOption(parsedSearchParams.sortBy)
                    : sortOptions[0]
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
};

export const ContentMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContentMoviesComponentContainer);
