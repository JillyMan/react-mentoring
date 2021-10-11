export const formatGenres = (values: string[]) =>
    values.length == 2 ? values.join(' & ') : values.join(', ');
