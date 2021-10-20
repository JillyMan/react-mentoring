import moviesDB from 'assets/data/movies.json';
import { MovieConfig } from 'shared/types/movies';
import { PagedList } from 'shared/types/paged-list';
import { FetchApi } from 'shared/utils/fetch-api';

const api = new FetchApi('http://localhost:4000/movies');

let movies = (moviesDB as MovieConfig[]).splice(0, 100);

const generateId = () => Date.now();

export const addMovie = (movie: MovieConfig) => {
    movies.push();
    movies = [{ ...movie, id: generateId() }, ...movies];
};

export const getMovies = async (
    offset: number,
    limit: number,
    sortBy?: string,
    sortOrder?: string,
    genreFilter?: string[],
) =>
    await api.get<PagedList<MovieConfig>>('', {
        limit,
        offset,
        sortBy,
        sortOrder,
        filter: genreFilter?.join(','),
    });

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
