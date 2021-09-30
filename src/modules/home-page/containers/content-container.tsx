import React, { useState } from 'react';
import { MovieInfo } from "../../../shared/types/movies";
import { Content } from '../components/content/content';

const genres = [
    'All',
    'Action',
    'Documentary',
    'Comedy',
    'Horror',
    'Crime',
];

const sortOptionsNames = {
    byDate: 'By date',
    byRating: 'By rating',
}

const sortOptions = [
    sortOptionsNames.byDate,
    sortOptionsNames.byRating
];

function sortedMovies(option: string, movies: MovieInfo[]): MovieInfo[] {
    if (option == sortOptionsNames.byDate) {
        return movies.sort((a, b) => a && b && new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    } else if (option == sortOptionsNames.byRating) {
        return movies.sort((a, b) => a && b && b.vote_average - a.vote_average);
    }

    return movies;
}

function filterByGenre(genre: string, movies: MovieInfo[]): MovieInfo[] {
    return genre !== 'All' ? movies.filter(x => x && x.genres.includes(genre)) : movies;
}

interface Props {
    movies: MovieInfo[];
}

export const ContentContainer = ({ movies }: Props) => {
    const [selectedGenre, setSelectedGenre] = useState(genres[0]);
    const [sortOption, setSortOption] = useState(sortOptions[0]);

    const filterdMovies = sortedMovies(sortOption, filterByGenre(selectedGenre, movies));

    const onHandleGenreChange = (genre: string) => {
        setSelectedGenre(genre);
    }

    const onHandleSortChange = (sort: string) => {
        setSortOption(sort);
    }

    return (
        <Content
            options={genres}
            selectedOption={selectedGenre}
            sortOptions={sortOptions}
            movies={filterdMovies}
            onOptionChanged={onHandleGenreChange}
            onSortOptionChanged={onHandleSortChange}
        />
    )

}