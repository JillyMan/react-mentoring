import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const HeightItem = 57;
const BackgroundColor = '#F65261';

const styles = {
    searchInputStyle: {
        width: '100%',
        height: HeightItem,
    },
    searchButton: {
        width: '40%',
        height: HeightItem,
        background: BackgroundColor,
        ':hover': { background: BackgroundColor },
    },
};

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'rgba(50, 50, 50, 0.8)',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(50, 50, 50, 0.8)',
        },
    },
});

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
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
                    <CssTextField
                        id='outlined-search'
                        label={this.props.text}
                        type='search'
                        onChange={(e) => this.onSearchChange(e.target.value)}
                        sx={styles.searchInputStyle}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant='contained'
                        onClick={() => this.props.onSearchClick(this.state.searchText)}
                        sx={styles.searchButton}
                    >
                        SEARCH
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

SearchBox.propTypes = {
    text: PropTypes.string,
    onSearchClick: PropTypes.func,
};

export default SearchBox;
