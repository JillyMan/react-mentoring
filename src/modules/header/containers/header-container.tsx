import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components';
import {
    setFilterMoviesAction,
    SetSearchMoviesFilterAction,
    SetSearchMoviesFilterPayload,
} from 'modules/content-movies/actions/actions';

interface Props {
    setSearchFilter: (
        paylod: SetSearchMoviesFilterPayload,
    ) => SetSearchMoviesFilterAction;
}

const HeaderComponentContainer = ({ setSearchFilter }: Props) => {
    const handleSearchClick = (search: string) => {
        setSearchFilter({
            searchBy: 'title',
            option: search,
        });
    };

    return <Header onSearchClick={handleSearchClick} />;
};

const mapDispatchToProps = {
    setSearchFilter: setFilterMoviesAction,
};

export const HeaderContainer = connect(
    undefined,
    mapDispatchToProps,
)(HeaderComponentContainer);
