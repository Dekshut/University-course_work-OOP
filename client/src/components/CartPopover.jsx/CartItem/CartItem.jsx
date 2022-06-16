import './CartItem.scss'
import img from '../../../images/product/0.jpg'
import { Link } from 'react-router-dom'

export default function CartItem({ handleClose }) {

  return (
    <Link className='cartItem' onClick={handleClose} to="/product">
      <img className='cartItem-img' src={img} alt='product' />
      <div className='cartItem-content'>
        <div className='cartItem-content__title'>Tie Belt Skirt</div>
        <div className='cartItem-content__price'>$29.99</div>
        <div className='cartItem-content__text'>
          <span>Quantity:</span>
          <div>2</div>
        </div>
        <div className='cartItem-content__text'>
          <span>Color:</span>
          <div>red</div>
        </div>
        <div className='cartItem-content__text'>
          <span>Size:</span>
          <div>XL</div>
        </div>
      </div>
    </Link>
  )
}