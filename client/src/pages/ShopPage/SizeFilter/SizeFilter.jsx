import './SizeFilter.scss'
import Checkbox from '@mui/material/Checkbox';


function SizeFilter() {
  return (
    <div className="filter__item filter-size">
      <h3 className="filter__title">Size Filter</h3>
      <form className="filter-size__form" action="#">
        <label className="filter-size__label">
          <Checkbox sx={{ color: '#8d8d8d', '&.Mui-checked': { color: 'rgb(52, 195, 255)' } }} />
          <span className="filter-size__text">X-small</span>
        </label>
        <label className="filter-size__label">
          <Checkbox sx={{ color: '#8d8d8d', '&.Mui-checked': { color: 'rgb(52, 195, 255)' } }} />
          <span className="filter-size__text">Small</span>
        </label>
        <label className="filter-size__label">
          <Checkbox sx={{ color: '#8d8d8d', '&.Mui-checked': { color: 'rgb(52, 195, 255)' } }} />
          <span className="filter-size__text">Medium</span>
        </label>
        <label className="filter-size__label">
          <Checkbox sx={{ color: '#8d8d8d', '&.Mui-checked': { color: 'rgb(52, 195, 255)' } }} />
          <span className="filter-size__text">Large</span>
        </label>
        <label className="filter-size__label">
          <Checkbox sx={{ color: '#8d8d8d', '&.Mui-checked': { color: 'rgb(52, 195, 255)' } }} />
          <span className="filter-size__text">XL</span>
        </label>
        <label className="filter-size__label" style={{ margin: 0 }}>
          <Checkbox sx={{ color: '#8d8d8d', '&.Mui-checked': { color: 'rgb(52, 195, 255)' } }} />
          <span className="filter-size__text">XXL</span>
        </label>
      </form>
    </div>
  );
}

export default SizeFilter;