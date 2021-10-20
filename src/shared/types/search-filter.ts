export interface SearchFilter {
    sortBy?: string;
    sortOrder?: 'desc' | 'asc';
    searchValue?: string;
    searchBy?: 'title' | 'genres';
    genresFilter?: string[];
}
