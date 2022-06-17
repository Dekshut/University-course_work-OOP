import { useEffect } from 'react';
import './TypeFilter.scss'
import { useSelector, useDispatch } from 'react-redux';
import { changeAllCategories } from '../../../redux/slices/appSlice';

const requestFetch = (url) => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Smth gone wrong')
      e.data = error
      throw e
    })
  });
}

function TypeFilter() {
  const dispatch = useDispatch()
  const {allCategories} = useSelector(state => state.app)

  useEffect(() => {
    const url = 'http://localhost:8080/api/category';

    requestFetch(url)
      .then(data => {
        // console.log(data)
        dispatch(changeAllCategories(data))
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <div className="typeFilter">
      {allCategories.map(item => (
        <button className="filterBtn">{item.name}</button>
      ))}
    </div>
  );
}

export default TypeFilter;