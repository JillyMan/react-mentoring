import { MovieConfig } from 'shared/types/movies';

export interface MoviesSearchSettings {
    sortBy?: string;
    sortOrder?: 'desc' | 'asc';
    searchValue?: string;
    searchBy?: 'title' | 'genres';
    genresFilter: string[];
}

export interface MoviesState {
    movies: MovieConfig[] | null;
    totalAmount: number;

    searchSettings: MoviesSearchSettings;
}
