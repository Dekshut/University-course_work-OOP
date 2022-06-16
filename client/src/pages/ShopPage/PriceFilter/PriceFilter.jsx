import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './PriceFilter.scss'


function PriceFilter() {
  const [value, setValue] = React.useState([10, 23]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filter__item filter-price">
      <h3 className="filter__title">Price Filter</h3>
      
      <Box sx={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          style={{ color: 'rgb(52, 195, 255)'}}
        />
      </Box>

      <label className="filter-price__label">
        <span>Price:
          $<span className="filter-price__from">{value[0]}</span> -
          $<span className="filter-price__to">{value[1]}</span>
        </span>
        <button className="filter-price__btn" type="submit">Filter</button>
      </label>
    </div>
  );
}

export default PriceFilter;