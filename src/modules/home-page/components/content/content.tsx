import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import React from 'react';
import { FilterPanel } from './filter-panel';
import { Grid } from '@mui/material';
import { MovieInfo } from '../../../../shared/types/movies';
import { Movies } from './movies';

interface Props {
    selectedOption: string;
    options: string[];
    sortOptions: string[];

    onOptionChanged: (option: string) => void;
    onSortOptionChanged: (value: string) => void;

    movies: MovieInfo[];
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >

            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
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
        <Box sx={{ width: '100%' }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <FilterPanel
                            selectedOption={selectedOption}
                            options={options}
                            sortOptions={sortOptions}
                            selectedSort={sortOptions[0]}
                            onOptionChanged={(s) => onOptionChanged(s)}
                            onSortOptionChanged={(s) => onSortOptionChanged(s)}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ margin: '0 0 0 50px' }}>
                    <p><b>{movies ? movies.length : 0}</b> movies found</p>
                </Grid>
                <Grid item xs={12} sx={{ margin: '50px 50px 0 50px' }}>
                    <Movies movies={movies} />
                </Grid>
            </Grid>
        </Box>
    );
}