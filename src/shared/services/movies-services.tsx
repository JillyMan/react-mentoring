import moviesDB from 'assets/data/movies.json';
import { MovieConfig } from 'shared/types/movies';

let movies = moviesDB as MovieConfig[];

const generateId = () => Date.now();

export const addMovie = (movie: MovieConfig) => {
    movies.push();
    movies = [{ ...movie, id: generateId() }, ...movies];
};

export const getMovies = () => [...movies];

export const updateMovie = (movie: MovieConfig) => {
    const index = movies.findIndex((x) => x.id === movie.id);
    if (index === -1) {
        console.error(`invalid id: ${movie.id}`);
        return;
    }

    movies[index] = { ...movie };
};

export const deleteMovie = (id: number) => {
    const index = movies.findIndex((x) => x.id === id);
    if (index === -1) {
        console.error(`invalid id: ${id}`);
        return;
    }

    movies.splice(index, 1);
};
