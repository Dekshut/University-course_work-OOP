import { useEffect } from 'react';
import './TypeFilter.scss'
import { useSelector, useDispatch } from 'react-redux';
import { changeAllCategories } from '../../../redux/slices/appSlice';

function TypeFilter() {
  const {allCategories} = useSelector(state => state.app)

  return (
    <div className="typeFilter">
      {allCategories.map(item => (
        <button className="filterBtn">{item.name}</button>
      ))}
    </div>
  );
}

export default TypeFilter;