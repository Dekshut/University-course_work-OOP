import './SortFilter.scss'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortFilter() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, margin: 0 }} size="small">
      <InputLabel id="demo-select-small">Sort By</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Sort By"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Default</em>
        </MenuItem>
        <MenuItem value={10}>Newest</MenuItem>
        <MenuItem value={20}>Lowest Price</MenuItem>
        <MenuItem value={30}>Highest Price</MenuItem>
      </Select>
    </FormControl>
  );
}
