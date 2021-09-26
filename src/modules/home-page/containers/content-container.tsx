import React, { useState } from 'react';
import { MovieInfo } from "../../../shared/types/movies";
import { Content } from '../components/content/content';


interface Props {
    movies: MovieInfo[];
}


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
    debugger;
    if (option == 'By date') {
        return movies.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    } else if (option == 'By rating') {
        // todo: check why it does not work !!
        return movies.sort((a, b) => a.vote_average - b.vote_average);
    }

    return movies;
}

function filterByGenre(genre: string, movies: MovieInfo[]): MovieInfo[] {
    if (genre != 'All') {
        return movies.filter(x => x.genres.includes(genre));
    }
    return movies;
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
        console.log(sort)
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