import { InputBase, Button, Divider } from '@mui/material';
import LocationSelect from './LocationSelect';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = () => {
    return (
        <div style={{
            width:'60%',
            height:'50%',
            border: '1px solid #e6e6e6',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '40px',
            overflow: 'hidden',
            justifyContent: 'space-between',
        }}>
            <LocationSelect />
            <Divider orientation="vertical" flexItem />
            <InputBase placeholder="Search" sx={{
                width:'60%'
            }} />
            <Button startIcon={<SearchOutlinedIcon />} sx={{borderRadius:'40px'}} variant='contained' color='warning'>Search</Button>
        </div>
    )
}


export default Search;