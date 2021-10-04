import React from 'react';
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
import { SumbitButton } from 'modules/shared/components/submit-button';
import { Input } from 'modules/shared/components/input';
import { ResetButton } from 'modules/shared/components/reset-button';

interface Props {
    configTitle: 'ADD' | 'EDIT';
    movieConfig: MovieConfig;
    avaliableGenres: string[];
    onSubmitClick: (movieConfig: MovieConfig) => void;
}

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

const requiredFildsName = [
    movieConfigNames.title,
    movieConfigNames.release_date,
    movieConfigNames.poster_path,
    movieConfigNames.vote_average,
    movieConfigNames.genres,
    movieConfigNames.runtime,
    movieConfigNames.overview,
];

const requiredFildFilled = (
    filds: typeof requiredFildsName,
    movieConfig: MovieConfig,
) => {
    return filds.every((field) => !!movieConfig[field as keyof MovieConfig]);
};

export const ConfigurationMovie = ({
    configTitle,
    movieConfig,
    avaliableGenres,
    onSubmitClick,
}: Props) => {
    const [config, setConfig] = React.useState(movieConfig);

    const onKeyChangeHandle = (key: string, value: string | string[]) => {
        setConfig({ ...config, [key]: value });
    };

    const onSubmitHandle = () => {
        onSubmitClick(config);
    };

    const onResetHandle = () => {
        setConfig({
            ...config,
            title: '',
            release_date: '',
            poster_path: '',
            vote_average: 0,
            genres: [],
            runtime: 0,
            overview: '',
        });
    };

    const onHandleGenreChange = (event: SelectChangeEvent<typeof config.genres>) => {
        const {
            target: { value },
        } = event;
        setConfig({
            ...config,
            genres: typeof value === 'string' ? value.split(',') : value,
        });
    };

    const allGenres = [
        ...avaliableGenres,
        ...config.genres.map((g) => g.split(',')),
    ] as string[];
    const submitButtonDisabled = !requiredFildFilled(requiredFildsName, config);

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
                        value={config.title}
                        onChange={(e) =>
                            onKeyChangeHandle(movieConfigNames.title, e.target.value)
                        }
                    />
                </Grid>
                <Grid item xs={4}>
                    <DatePicker
                        label='Release date'
                        value={config.release_date}
                        onChange={(newValue) => {
                            onKeyChangeHandle(
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
                        value={config.poster_path}
                        onChange={(e) =>
                            onKeyChangeHandle(
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
                        value={config.vote_average}
                        onChange={(e) =>
                            onKeyChangeHandle(
                                movieConfigNames.vote_average,
                                e.target.value,
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
                            value={config.genres}
                            onChange={onHandleGenreChange}
                            input={<OutlinedInput label='Genres' />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {allGenres.map((genre, id) => (
                                <MenuItem key={id} value={genre}>
                                    <Checkbox
                                        checked={config.genres.indexOf(genre) > -1}
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
                        variant='outlined'
                        type='number'
                        label='Runtime'
                        value={config.runtime}
                        onChange={(e) =>
                            onKeyChangeHandle(movieConfigNames.runtime, e.target.value)
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        multiline
                        style={{ ...configurationStyles.input, height: '100%' }}
                        minRows={3}
                        maxRows={6}
                        label='Overview'
                        value={config.overview}
                        onChange={(e) =>
                            onKeyChangeHandle(movieConfigNames.overview, e.target.value)
                        }
                    />
                </Grid>
                <Grid item xs={6} />

                <Grid item xs={3}>
                    <ResetButton variant='outlined' onClick={onResetHandle}>
                        RESET
                    </ResetButton>
                </Grid>
                <Grid item xs={3}>
                    <SumbitButton
                        variant='contained'
                        endIcon={<SendIcon />}
                        onClick={onSubmitHandle}
                        disabled={submitButtonDisabled}
                    >
                        SUBMIT
                    </SumbitButton>
                </Grid>
            </Grid>
        </ConfigurationMovieBox>
    );
};
