import React from 'react';
import { Header } from '../components';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { getSearchParams } from 'shared/utils/search-params';

const HeaderComponentContainer = () => {
    const navigate = useNavigate();
    const { searchValue } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const parsedParams = getSearchParams(searchParams);

    const handleSearchClick = (search: string) => {
        setSearchParams({ ...parsedParams, searchValue: search });
    };

    return (
        <Header
            searchValue={parsedParams.searchValue || ''}
            onSearchClick={handleSearchClick}
        />
    );
};

export const HeaderContainer = HeaderComponentContainer;
