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

describe('Configuration movie test', () => {
    test('Sumbit button avalible', () => {
        const submitClick = jest.fn();
        renderComponent(initialMovieConfig, submitClick);
        userEvent.click(screen.getByText('SUBMIT'));
        expect(submitClick).not.toHaveBeenCalled();
    });

    it('click', () => {
        act(() => {
            render(
                <div>
                    <label htmlFor='checkbox'>Check</label>
                    <input id='checkbox' type='checkbox' />
                </div>,
            );

            userEvent.click(screen.getByText('Check'));
        });
        expect(screen.getByLabelText('Check')).toBeChecked();
    });

    it('reset button', () => {
        act(() => {
            renderComponent({ ...initialMovieConfig, title: 'new title' }, jest.fn);
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
