import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { SubmitButton } from 'modules/shared/components/submit-button';
import { Input } from 'modules/shared/components/input';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: props.searchValue,
        };

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(value) {
        this.setState({ searchText: value });
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Input
                        id='outlined-search'
                        label={this.props.text}
                        type='search'
                        value={this.state.searchText}
                        onChange={(e) => this.onSearchChange(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <SubmitButton
                        sx={{ width: '233px' }}
                        variant='contained'
                        onClick={() => this.props.onSearchClick(this.state.searchText)}
                    >
                        SEARCH
                    </SubmitButton>
                </Grid>
            </Grid>
        );
    }
}

SearchBox.propTypes = {
    text: PropTypes.string,
    searchValue: PropTypes.string,
    onSearchClick: PropTypes.func,
};

export default SearchBox;
