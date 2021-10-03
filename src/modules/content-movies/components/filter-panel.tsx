import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    Grid,
    Select,
    SelectChangeEvent,
    Tab,
    Tabs,
    MenuItem,
} from '@mui/material';

interface FilterPanelProps {
    selectedOption: string;
    options: string[];
    selectedSort: string;
    sortOptions: string[];
    onOptionChanged: (option: string) => void;
    onSortOptionChanged: (sortValue: string) => void;
}

export const FilterPanel = ({
    selectedOption,
    options,
    selectedSort,
    sortOptions,
    onOptionChanged,
    onSortOptionChanged,
}: FilterPanelProps) => {
    const [newSelectedOptionValue, setNewSelectedOptionValue] = useState(selectedOption);
    const [newSelectedSortOptionValue, setNewSelectedSortOptionValue] =
        useState(selectedSort);

    const onHandleOptionChange = (_: React.SyntheticEvent, newValue: string) => {
        setNewSelectedOptionValue(newValue);
        onOptionChanged(newValue);
    };

    const onHandleSortOptionChange = (event: SelectChangeEvent) => {
        const value = event.target.value as string;
        setNewSelectedSortOptionValue(value);
        onSortOptionChanged(value);
    };

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={10}>
                <Tabs value={newSelectedOptionValue} onChange={onHandleOptionChange}>
                    {options.map((value, id) => (
                        <Tab label={value} value={value} key={id} />
                    ))}
                </Tabs>
            </Grid>
            <Grid item xs={2}>
                <FormControl sx={{ minWidth: 128 }}>
                    <InputLabel>Sort by</InputLabel>
                    <Select
                        value={newSelectedSortOptionValue}
                        label='Sort by'
                        autoWidth
                        onChange={onHandleSortOptionChange}
                    >
                        {sortOptions.map((o, i) => (
                            <MenuItem key={i} value={o}>
                                {o}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};
