import React, { forwardRef, useState, useMemo } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import SendIcon from '@mui/icons-material/Send';
import {
    Grid,
    Typography,
    InputLabel,
    FormControl,
    ListItemText,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    MenuItem,
    Checkbox,
} from '@mui/material';
import { MovieConfig, movieConfigNames } from 'shared/types/movies';
import { formatDate } from 'shared/utils/date-format';
import { ConfigurationMovieBox } from './configuration-movie-box';
import { SubmitButton } from 'modules/shared/components/submit-button';
import { Input } from 'modules/shared/components/input';
import { ResetButton } from 'modules/shared/components/reset-button';
import { uniq } from 'shared/utils/';
import { InputValues } from 'shared/types/input-values';

const HeightItem = 57;

const configurationStyles = {
    input: {
        width: '100%',
        height: HeightItem,
    },
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

export interface ConfigurationMovieProps {
    configTitle: 'ADD' | 'EDIT';
    movieConfig: MovieConfig;
    avaliableGenres: string[];
    submitDisabled?: boolean;

    onKeyValueChange: (key: string, value: InputValues) => void;
    onResetClick: () => void;
    onSubmitClick: () => void;
}

export const ConfigurationMovie = forwardRef(
    ({
        configTitle,
        movieConfig,
        submitDisabled,
        avaliableGenres,
        onKeyValueChange,
        onResetClick,
        onSubmitClick,
    }: ConfigurationMovieProps) => {
        const allGenres = useMemo(
            () => uniq([...avaliableGenres, ...movieConfig.genres]),
            [movieConfig.genres],
        );

        const handleGenreChange = (
            event: SelectChangeEvent<typeof movieConfig.genres>,
        ) => {
            const {
                target: { value },
            } = event;

            onKeyValueChange(
                movieConfigNames.genres,
                typeof value === 'string' ? value.split(',') : value,
            );
        };

        const submitButtonDisabled = !!submitDisabled;

        return (
            <ConfigurationMovieBox>
                <Typography variant='h6' component='h2'>
                    {configTitle} MOVIE
                </Typography>
                <br />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={8}>
                        <Input
                            label='Title'
                            variant='outlined'
                            style={configurationStyles.input}
                            value={movieConfig.title}
                            onChange={(e) =>
                                onKeyValueChange(movieConfigNames.title, e.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <DatePicker
                            label='Release date'
                            value={movieConfig.release_date}
                            onChange={(newValue) => {
                                onKeyValueChange(
                                    movieConfigNames.release_date,
                                    formatDate(newValue),
                                );
                            }}
                            renderInput={(params) => (
                                <Input style={configurationStyles.input} {...params} />
                            )}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Input
                            style={configurationStyles.input}
                            label='Movie Url'
                            variant='outlined'
                            type='url'
                            value={movieConfig.poster_path}
                            onChange={(e) =>
                                onKeyValueChange(
                                    movieConfigNames.poster_path,
                                    e.target.value,
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            style={configurationStyles.input}
                            variant='outlined'
                            type='number'
                            label='Rating'
                            value={movieConfig.vote_average || ''}
                            onChange={(e) =>
                                onKeyValueChange(
                                    movieConfigNames.vote_average,
                                    e.target.value ? Number(e.target.value) : undefined,
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id='genres-checkbox-label'>Genres</InputLabel>
                            <Select
                                labelId='genres-checkbox-label'
                                multiple
                                value={movieConfig.genres}
                                onChange={handleGenreChange}
                                input={<OutlinedInput label='Genres' />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {allGenres.map((genre, id) => (
                                    <MenuItem key={id} value={genre}>
                                        <Checkbox
                                            checked={
                                                movieConfig.genres.indexOf(genre) > -1
                                            }
                                        />
                                        <ListItemText primary={genre} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            style={configurationStyles.input}
                            type='number'
                            variant='outlined'
                            label='Runtime'
                            value={movieConfig.runtime || ''}
                            onChange={(e) => {
                                e.target.value &&
                                    onKeyValueChange(
                                        movieConfigNames.runtime,
                                        e.target.value
                                            ? Number(e.target.value)
                                            : undefined,
                                    );
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            multiline
                            style={{ ...configurationStyles.input, height: '100%' }}
                            minRows={3}
                            maxRows={6}
                            label='Overview'
                            value={movieConfig.overview}
                            onChange={(e) =>
                                onKeyValueChange(
                                    movieConfigNames.overview,
                                    e.target.value,
                                )
                            }
                        />
                    </Grid>
                    <Grid item xs={6} />

                    <Grid item xs={3}>
                        <ResetButton variant='outlined' onClick={onResetClick}>
                            RESET
                        </ResetButton>
                    </Grid>
                    <Grid item xs={3}>
                        <SubmitButton
                            variant='contained'
                            endIcon={<SendIcon />}
                            onClick={onSubmitClick}
                            disabled={submitButtonDisabled}
                        >
                            SUBMIT
                        </SubmitButton>
                    </Grid>
                </Grid>
            </ConfigurationMovieBox>
        );
    },
);
