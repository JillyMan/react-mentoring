import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './header';
import { Provider } from 'react-redux';
import { configureStore } from 'store/store';

const store = configureStore();

const renderInContext = () => {
    return render(
        <Provider store={store}>
            <Header onSearchClick={() => {}} searchValue='Batman' />
        </Provider>,
    );
};

describe('Header', () => {
    test('render header with search value', () => {
        renderInContext();
        expect(screen.getByDisplayValue('Batman')).not.toBeNull();
    });

    test('render header snapsot test', () => {
        const { asFragment } = renderInContext();
        expect(asFragment()).toMatchSnapshot();
    });

    test('fire onSearchClick event', () => {
        renderInContext();
        const searchText = 'Elden ring';
        const element = screen.getByTestId('search-input');
        fireEvent.change(element, {
            target: { value: searchText },
        });
        expect(element.value).toBe(searchText);
    });
});
