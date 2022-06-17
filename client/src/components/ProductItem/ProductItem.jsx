import { Link } from 'react-router-dom';
import partner1 from '../../images/product/0.jpg';
import StarRating from '../StarRating/StarRating';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function ProductItem({ toList, img, title, descr, price, colorId, id, size, colorObj, category }) {
  console.log(colorObj)

  return (
    <div className={`product-item ${toList && 'product-item--list'}`}>

      <div className="product-item__img-box">
        <div className='darkBg'></div>
        <img className="product-item__images" src={img} alt="product" />
        <div className="product-item__link-box">

          <Link className="product-item__link" to={`/product?id=${id}&color=${colorObj?.name}&hex=${colorObj?.hex.replace('#', '')}&category=${category?.name}`}>
            <ReadMoreOutlinedIcon />
          </Link>

          <div className="product-item__link" href="#">
            <FavoriteOutlinedIcon />
          </div>

        </div>
      </div>

      <div className="product-item__wrapper-box">
        <div className="product-item__box">
          <h4 className="product-item__title">
            {title}
          </h4>
          <div className="product-item__price">
            <div className="product-item__new-price">${price}</div>
          </div>
        </div>
        <div className="product-item__content-box">
          <p className="product-item__text">
            {descr}
          </p>
          <button className="product-item__btn">Add to favorite</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;