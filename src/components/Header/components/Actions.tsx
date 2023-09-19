import React, { useState } from 'react';
import { IconButton, Select, MenuItem, ListItemIcon, Avatar, Divider, Box, Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import Image from 'next/image';
import useUserStore from '@/store/user.store';
import languageOptions from '@/constants/language';

const Actions = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const { cart } = useUserStore();

  const handleChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Select
        className='unborder'
        size="small"
        labelId="language-label"
        id="language"
        value={selectedLanguage}
        onChange={handleChange}
      >
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <ListItemIcon>
              <Image
                src={`https://flagcdn.com/w20/${option.flag}.png`}
                alt={option.value}
                width={20}
                height={10}
              />
            </ListItemIcon>
            {option.value}
          </MenuItem>
        ))}
      </Select>
      <Box display="flex" alignItems="center">
        <IconButton size='small' color="inherit">
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box display="flex" alignItems="center">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
    </div>
  );
}

export default Actions;
