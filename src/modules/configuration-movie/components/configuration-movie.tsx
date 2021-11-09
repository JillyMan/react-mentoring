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
import { initialMovieConfig, MovieConfig, movieConfigNames } from 'shared/types/movies';
import { formatDate } from 'shared/utils/date-format';
import { ConfigurationMovieBox } from './configuration-movie-box';
import { SubmitButton } from 'modules/shared/components/submit-button';
import { Input } from 'modules/shared/components/input';
import { ResetButton } from 'modules/shared/components/reset-button';
import { uniq } from 'shared/utils/';
import { InputValues } from 'shared/types/input-values';
import * as yup from 'yup';
import { useFormik } from 'formik';

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

    onSubmitClick: (config: MovieConfig) => void;
}

const validationMovieConfigSchema = yup.object({
    title: yup.string().required('Title is required'),
    release_date: yup.string().required('Release date is required'),
    poster_path: yup.string().url().required('Poster is required'),
    genres: yup.array().required('Genres is required'),
    vote_average: yup.number().max(10).min(0).required('Vote average is required'),
    runtime: yup.number().min(0).required('Title is required'),
    overview: yup.string().required('Overview is required'),
});

export const ConfigurationMovie = forwardRef(
    ({
        configTitle,
        movieConfig,
        submitDisabled,
        avaliableGenres,
        onSubmitClick,
    }: ConfigurationMovieProps) => {
        const allGenres = useMemo(
            () => uniq([...avaliableGenres, ...movieConfig.genres]),
            [movieConfig.genres],
        );

        const formik = useFormik({
            initialValues: movieConfig,
            validationSchema: validationMovieConfigSchema,
            onSubmit: onSubmitClick,
        });

        const handleReset = () => formik.resetForm();

        return (
            <form onSubmit={formik.handleSubmit}>
                <ConfigurationMovieBox>
                    <Typography variant='h6' component='h2'>
                        {configTitle} MOVIE
                    </Typography>
                    <br />
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={8}>
                            <Input
                                label='Title'
                                variant='outlined'
                                style={configurationStyles.input}
                                value={formik.values.title}
                                name={movieConfigNames.title}
                                onChange={formik.handleChange}
                                error={formik.touched.title && !!formik.errors.title}
                                helperText={formik.touched.title && formik.errors.title}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker
                                label='Release date'
                                value={formik.values.release_date}
                                onChange={(newValue) => {
                                    formik.setFieldValue(
                                        movieConfigNames.release_date,
                                        formatDate(newValue),
                                    );
                                }}
                                renderInput={(params) => (
                                    <Input
                                        style={configurationStyles.input}
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Input
                                style={configurationStyles.input}
                                label='Movie Url'
                                variant='outlined'
                                type='url'
                                value={formik.values.poster_path}
                                name={movieConfigNames.poster_path}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.poster_path &&
                                    !!formik.errors.poster_path
                                }
                                helperText={
                                    formik.touched.poster_path &&
                                    formik.errors.poster_path
                                }
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Input
                                style={configurationStyles.input}
                                variant='outlined'
                                type='number'
                                label='Rating'
                                value={formik.values.vote_average || ''}
                                name={movieConfigNames.vote_average}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.vote_average &&
                                    !!formik.errors.vote_average
                                }
                                helperText={
                                    formik.touched.vote_average &&
                                    formik.errors.vote_average
                                }
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id='genres-checkbox-label'>Genres</InputLabel>
                                <Select
                                    labelId='genres-checkbox-label'
                                    multiple
                                    value={formik.values.genres}
                                    name={movieConfigNames.genres}
                                    onChange={formik.handleChange}
                                    input={<OutlinedInput label='Genres' />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {allGenres.map((genre, id) => (
                                        <MenuItem key={id} value={genre}>
                                            <Checkbox
                                                checked={
                                                    formik.values.genres.indexOf(genre) >
                                                    -1
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
                                value={formik.values.runtime || ''}
                                name={movieConfigNames.runtime}
                                onChange={formik.handleChange}
                                // onChange={(e) => {
                                //     onKeyValueChange(
                                //         movieConfigNames.runtime,
                                //         Number(e.target.value),
                                //     );
                                // }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                multiline
                                style={{ ...configurationStyles.input, height: '100%' }}
                                minRows={3}
                                maxRows={6}
                                label='Overview'
                                value={formik.values.overview}
                                name={movieConfigNames.overview}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.overview && !!formik.errors.overview
                                }
                                helperText={
                                    formik.touched.overview && formik.errors.overview
                                }
                            />
                        </Grid>
                        <Grid item xs={6} />

                        <Grid item xs={3}>
                            <ResetButton variant='outlined' onClick={handleReset}>
                                RESET
                            </ResetButton>
                        </Grid>
                        <Grid item xs={3}>
                            <SubmitButton
                                variant='contained'
                                endIcon={<SendIcon />}
                                type='submit'
                            >
                                SUBMIT
                            </SubmitButton>
                        </Grid>
                    </Grid>
                </ConfigurationMovieBox>
            </form>
        );
    },
);
