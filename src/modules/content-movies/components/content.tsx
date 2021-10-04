import React from 'react';
import { Grid } from '@mui/material';
import { Movies } from './movies';
import { FilterPanel } from './filter-panel';
import { MovieConfig } from 'shared/types/movies';

interface Props {
    selectedOption: string;
    options: string[];
    sortOptions: string[];

    onOptionChanged: (option: string) => void;
    onSortOptionChanged: (value: string) => void;

    movies: MovieConfig[];
}

export const Content = ({
    selectedOption,
    options,
    sortOptions,
    movies,
    onOptionChanged,
    onSortOptionChanged,
}: Props) => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sx={{ marginTop: '20px' }}>
                <FilterPanel
                    selectedOption={selectedOption}
                    options={options}
                    sortOptions={sortOptions}
                    selectedSort={sortOptions[0]}
                    onOptionChanged={(s) => onOptionChanged(s)}
                    onSortOptionChanged={(s) => onSortOptionChanged(s)}
                />
                <hr />
            </Grid>
            <Grid item sx={{ margin: '0 0 0 50px' }}>
                <p>
                    <b>{movies ? movies.length : 0}</b> movies found
                </p>
            </Grid>
            <Grid item xs={12} sx={{ margin: '0px 50px 0 50px' }}>
                <Movies movies={movies} />
            </Grid>
        </Grid>
    );
};
