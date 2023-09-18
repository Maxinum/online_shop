'use client'

import React from 'react';
import { Box, Typography, TextField, InputAdornment, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Filters from '@/constants/filters';
import PriceFilter from './components/PriceFilter';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import useUrlParams from '@/utils/hooks/useURLParams';
import filterData from '@/utils/helpers/filterData';

const Filter = () => {
    const { get, set } = useUrlParams();

    const handleCheckboxChange = (category: string, value: string) => {
        const params = get(category);
        if (!params) {
            filterData(get("type"), get("supplier type"))
            return set(category, value);
        }
        const paramArray = params.split(',');
        if (paramArray.includes(value)) {
            const updatedParams = paramArray.filter(item => item !== value);
            set(category, updatedParams.join(','));
        } else {
            paramArray.push(value);
            set(category, paramArray.join(','));
        }
        filterData(get("type"), get("supplier type"))
    };

    const handlePromoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        set('promo', event.target.value);
    };

    return (
        <Box sx={{
            height: '80vh',
            width: '20vw',
            border: '2px solid #e6e6e6',
            borderRadius: '5px',
            boxSizing: 'border-box',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Filter</Typography>
            {Object.entries(Filters).map(([category, items]) => (
                <div key={category}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{category}</Typography>
                    <FormGroup>
                        {items.map((item, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        size="small"
                                        color="warning"
                                        checked={get(item.key)?.split(',').includes(item.value) || false}
                                        onChange={() => handleCheckboxChange(item.key, item.value)}
                                    />
                                }
                                label={item.value}
                            />
                        ))}
                    </FormGroup>
                </div>
            ))}
            <PriceFilter />
            <TextField
                variant="outlined"
                fullWidth
                size='small'
                placeholder='Promo'
                value={get('promo') || ''}
                onChange={handlePromoInputChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LoyaltyOutlinedIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default Filter;
