import * as yup from 'yup';

export interface MovieConfig {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

export const initialMovieConfig: MovieConfig = {
    id: 0,
    title: '',
    tagline: 'tagline',
    vote_average: 0,
    vote_count: 1000,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    genres: [],
    runtime: 0,
};

export interface MoviesSearchFilter {
    offset: number;
    limit: number;

    sortBy?: string;
    sortOrder?: 'desc' | 'asc';
    searchValue?: string;
    searchBy?: 'title' | 'genres';
    genresFilter: string[];
}

export const movieConfigNames = {
    id: 'id',
    title: 'title',
    tagline: 'tagline',
    vote_average: 'vote_average',
    vote_count: 'vote_count',
    release_date: 'release_date',
    poster_path: 'poster_path',
    overview: 'overview',
    budget: 'budget',
    revenue: 'revenue',
    genres: 'genres',
    runtime: 'runtime',
};

export const validationMovieConfigSchema = yup.object({
    title: yup.string().required('Title is required'),
    release_date: yup.string().required('Release date is required'),
    poster_path: yup.string().url().required('Poster is required'),
    genres: yup.array().required('Genres is required'),
    vote_average: yup.number().max(10).min(0).required('Vote average is required'),
    runtime: yup.number().min(0).required('Title is required'),
    overview: yup.string().required('Overview is required'),
});
