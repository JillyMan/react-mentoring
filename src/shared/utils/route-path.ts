export interface Path<T extends any[]> {
    pattern: string;
    getPath: (...param: T) => string;
}

export const mainPath: Path<[]> = {
    pattern: '/',
    getPath: () => '/',
};

export const viewMovieDetailsPath: Path<[number]> = {
    pattern: '/view-movie/:movieId',
    getPath: (id: number) => `/view-movie/${id}`,
};

export const searchPath: Path<[string]> = {
    pattern: '/search/:searchString',
    getPath: (searchString: string) => `/search/${searchString}`,
};
