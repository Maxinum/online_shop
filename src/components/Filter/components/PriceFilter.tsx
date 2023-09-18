'use client'

import { Slider, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import useUrlParams from '@/utils/hooks/useURLParams';

const marks = [
    {
        value: 10,
        label: '10',
    },
    {
        value: 1000,
        label: '1000',
    },
];

const PriceFilter = () => {
    const [sliderValue, setSliderValue] = useState<number>(70);
    const { set } = useUrlParams();

    const handleSliderChange = (_: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setSliderValue(newValue);
        }
    };

    const handleSliderChangeCommitted = (_: Event, newValue: string) => {
        set('maxPrice', newValue);
    };

    return (
        <Box>
            <Typography variant="body1">
                Min Order
            </Typography>
            <Slider
                color="warning"
                value={sliderValue}
                onChange={handleSliderChange}
                onChangeCommitted={handleSliderChangeCommitted}
                aria-label="Small"
                valueLabelDisplay="auto"
                max={1000}
                marks={marks}
            />
        </Box>
    );
};

export default PriceFilter;
