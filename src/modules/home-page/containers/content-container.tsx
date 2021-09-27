import React, { useState } from 'react';
import { MovieInfo } from "../../../shared/types/movies";
import { Content } from '../components/content/content';
import movies from '../../../assets/data/movies.json';

const slicedMovies: MovieInfo[] = movies.slice(0, 100);

const genres = [
    'All',
    'Documentary',
    'Comedy',
    'Horror',
    'Crime',
];

const sortOptions = [
    'By date',
    'By rating'
];

function sortedMovies(option: string, movies: MovieInfo[]): MovieInfo[] {
    if (option == 'By date') {
        return movies.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    } else if (option == 'By rating') {
        // todo: check why it does not work !!
        return movies.sort((a, b) => b.vote_average - a.vote_average);
    }

    return movies;
}

function filterByGenre(genre: string, movies: MovieInfo[]): MovieInfo[] {
    return genre !== 'All' ? movies.filter(x => x.genres.includes(genre)) : movies;
}

export const ContentContainer = () => {
    const [selectedGenre, setSelectedGenre] = useState(genres[0]);
    const [sortOption, setSortOption] = useState(sortOptions[0]);

    const filterdMovies = sortedMovies(sortOption, filterByGenre(selectedGenre, slicedMovies));

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