import { MovieConfig, MoviesSearchFilter } from 'shared/types/movies';

export interface MoviesState {
    movies: MovieConfig[] | null;
    totalAmount: number;

    searchSettings: MoviesSearchFilter;
}
