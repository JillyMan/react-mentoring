import React from 'react';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfigurationMovie } from './configuration-movie';
import { initialMovieConfig, MovieConfig } from 'shared/types/movies';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

function renderComponent(
    initConfig: MovieConfig,
    onSubmit: (movie: MovieConfig) => void,
) {
    return render(
        <LocalizationProvider dateAdapter={DateAdapter}>
            <ConfigurationMovie
                configTitle='ADD'
                movieConfig={initConfig}
                avaliableGenres={[]}
                onSubmitClick={onSubmit}
            />
        </LocalizationProvider>,
    );
}

describe('Configuration movie', () => {
    test('Sumbit button is not avalible', () => {
        const submitClick = jest.fn();
        renderComponent(initialMovieConfig, submitClick);
        userEvent.click(screen.getByText('SUBMIT'));
        expect(submitClick).not.toHaveBeenCalled();
    });

    it('click reset button to clean current movie config', () => {
        act(() => {
            renderComponent({ ...initialMovieConfig }, jest.fn);

            const title = 'Elden ring';
            const element = screen.getByTestId('movie-title-id');
            fireEvent.change(element, {
                target: { value: title },
            });

            const resetBtn = screen.getByText('RESET');
            resetBtn.click();
        });

        const element = screen.getByTestId('movie-title-id');
        expect(element.value).toBe('');
    });

    test('configuration movie snapshot test', () => {
        const { asFragment } = renderComponent(
            {
                ...initialMovieConfig,
                title: 'new title',
                overview: 'bla bla bla overview',
                vote_average: 10,
                vote_count: 10,
                poster_path: 'https://some-url.com',
                genres: ['one', 'second'],
                runtime: 200,
            },
            jest.fn,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
