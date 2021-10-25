export const formatGenres = (values: string[]) =>
    values ? (values.length == 2 ? values.join(' & ') : values.join(', ')) : '';
