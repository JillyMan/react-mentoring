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
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    genres: [],
    runtime: 0,
};

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
