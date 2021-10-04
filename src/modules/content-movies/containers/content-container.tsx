import React, { useState } from 'react';
import { allGenres } from 'shared/types/genres';
import { MovieConfig } from 'shared/types/movies';
import { ContentMovies } from '../components/content-movies';

const sortOptionsNames = {
    byDate: 'By date',
    byRating: 'By rating',
};

const sortOptions = [sortOptionsNames.byDate, sortOptionsNames.byRating];

function sortedMovies(option: string, movies: MovieConfig[]): MovieConfig[] {
    if (option == sortOptionsNames.byDate) {
        return movies.sort(
            (a, b) =>
                a &&
                b &&
                new Date(b.release_date).getTime() - new Date(a.release_date).getTime(),
        );
    } else if (option == sortOptionsNames.byRating) {
        return movies.sort((a, b) => a && b && b.vote_average - a.vote_average);
    }

    return movies;
}

function filterByGenre(genre: string, movies: MovieConfig[]): MovieConfig[] {
    return genre !== 'All' ? movies.filter((x) => x && x.genres.includes(genre)) : movies;
}

interface Props {
    movies: MovieConfig[];

    onDeleteMovie: (id: number) => void;
    onUpdateMovie: (movei: MovieConfig) => void;
}

export const ContentMoviesContainer = ({
    movies,
    onDeleteMovie,
    onUpdateMovie,
}: Props) => {
    const [selectedGenre, setSelectedGenre] = useState(allGenres[0]);
    const [sortOption, setSortOption] = useState(sortOptions[0]);

    const filterdMovies = sortedMovies(sortOption, filterByGenre(selectedGenre, movies));

    const onHandleGenreChange = (genre: string) => {
        setSelectedGenre(genre);
    };

    const onHandleSortChange = (sort: string) => {
        setSortOption(sort);
    };

    return (
        <ContentMovies
            options={allGenres}
            selectedOption={selectedGenre}
            sortOptions={sortOptions}
            movies={filterdMovies}
            onOptionChanged={onHandleGenreChange}
            onSortOptionChanged={onHandleSortChange}
            onDeleteMovie={onDeleteMovie}
            onUpdateMovie={onUpdateMovie}
        />
    );
};
