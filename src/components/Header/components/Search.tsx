'use client'

import { InputBase, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState, useEffect } from 'react';
import useURLParams from '@/utils/hooks/useURLParams';
import useProductStort from '@/store/product.store';

const Search = () => {
    const { filterProducts } = useProductStort()
    const [searchText, setSearchText] = useState("")
    const { set, get } = useURLParams();

    const maxPrice = get("maxPrice") as string;
    const types = get("type") as string;
    const suppliers = get("supplier type") as string;
    const search = get("search") as string;

    const onHandleSearch = () => {
        set("search", searchText);
    }

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    useEffect(() => {
        filterProducts(types, suppliers, maxPrice, search);
    }, [types, suppliers, search, maxPrice, filterProducts])


    return (
        <div style={{
            width: '50%',
            height: '50%',
            border: '1px solid #e6e6e6',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '40px',
            overflow: 'hidden',
            justifyContent: 'space-between',
        }}>
            <InputBase value={searchText}
                onChange={handleSearchInputChange}
                placeholder="Search..." sx={{
                    paddingLeft: '2rem',
                    width: '60%'
                }} />
            <Button
                onClick={onHandleSearch}
                startIcon={<SearchOutlinedIcon />}
                sx={{ borderRadius: '40px' }}
                variant='contained'
                color='warning'
            >
                Search
            </Button>
        </div>
    )
}


export default Search;