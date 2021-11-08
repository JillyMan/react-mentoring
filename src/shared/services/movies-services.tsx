import { MovieConfig, MoviesSearchFilter } from 'shared/types/movies';
import { PagedList } from 'shared/types/paged-list';
import { FetchApi } from 'shared/utils/fetch-api';

const api = new FetchApi('http://localhost:4000/movies');

export const getMovies = async (searchFilter: MoviesSearchFilter) =>
    await api.get<PagedList<MovieConfig>>('', {
        limit: searchFilter.limit,
        offset: searchFilter.offset,
        sortBy: searchFilter.sortBy,
        sortOrder: searchFilter.sortOrder,
        search: searchFilter.searchValue,
        searchBy: searchFilter.searchBy,
        filter: searchFilter.genresFilter?.join(','),
    });

export const getMovie = async (id: number) => await api.get<MovieConfig>(`${id}`);

export const addMovie = async (movie: MovieConfig) =>
    await api.post('', { ...movie, id: undefined });

export const updateMovie = async (movie: MovieConfig) =>
    await api.put('', { ...movie, tagline: 'undefined' });

export const deleteMovie = async (id: number) => await api.delete(`${id}`);
