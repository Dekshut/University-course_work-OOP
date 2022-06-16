import { Link } from 'react-router-dom';
import partner1 from '../../images/product/0.jpg';
import StarRating from '../StarRating/StarRating';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function ProductItem({ toList }) {
  return (
    <div className={`product-item ${toList && 'product-item--list'}`}>

      <div className="product-item__img-box">
        <div className='darkBg'></div>
        <img className="product-item__images" src={partner1} alt="product" />
        <div className="product-item__link-box">

          <Link className="product-item__link" to="/product">
            <ReadMoreOutlinedIcon/>
          </Link>

          <div className="product-item__link" href="#">
            <FavoriteOutlinedIcon/>
          </div>

        </div>
      </div>

      <div className="product-item__wrapper-box">
        <div className="product-item__box">
          {/* <StarRating /> */}
          <h4 className="product-item__title">
            White Polo Men’s T-Shirt
          </h4>
          <div className="product-item__price">
            <div className="product-item__new-price">$34.00</div>
            {/* <div className="product-item__old-price">$27.00</div> */}
          </div>
        </div>
        <div className="product-item__content-box">
          <p className="product-item__text">
            Lorem ipsum dolor sit amet, adipiscing elit, sed de eusmod utlitoi labore et dolore magna aliqua.
          </p>
          <button className="product-item__btn">Add to favorite</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;