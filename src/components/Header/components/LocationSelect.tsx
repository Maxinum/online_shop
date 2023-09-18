import React from 'react';
import { InputAdornment, MenuItem, Select, FormControl, ListItemIcon, ListItemText } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const LocationSelect = () => {
  const [location, setLocation] = React.useState('');

  const handleLocationChange = (event: any) => {
    setLocation(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{
      width:'25%'
    }}>
      <Select
        className='unborder'
        size='small'
        labelId="location-label"
        id="location"
        value={location}
        onChange={handleLocationChange}
        startAdornment={
          <InputAdornment position="start">
            <ListItemIcon>
              <PlaceOutlinedIcon />
            </ListItemIcon>
          </InputAdornment>
        }
      >
        <MenuItem value="us">
          <ListItemText >United States</ListItemText>
        </MenuItem>
        <MenuItem value="uk">
          <ListItemText>United Kingdom</ListItemText>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LocationSelect;
