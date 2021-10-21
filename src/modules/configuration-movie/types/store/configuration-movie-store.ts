import { MovieConfig } from 'shared/types/movies';

export interface ConfigurationMovieStore {
    draftConfig: MovieConfig;
    changed: boolean;
}
