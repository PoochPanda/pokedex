import {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  backgroundColor: '#f2f2f2', 
  display: 'flex',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const SearchBar = ({onChange}) => {
  return (
          <Search style={{backgroundColor: '#f2f2f2', display: 'flex'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pokemon zoeken"
              inputProps={{ 'aria-label': 'search' }}
              style={{flexGrow: 1}}
              onChange={onChange}
            />
          </Search>
  );
}

export default SearchBar;
