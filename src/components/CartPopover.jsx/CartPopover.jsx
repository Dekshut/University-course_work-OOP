import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import './CartPopover.scss'

export default function CartPopover({ handleClose }) {
  const [cartData, setCartData] = useState([1]);

  return (
    <div className='cart'>
      <div className='cart-content'>
        {!cartData.length ? (
          <div className='cart-title'>Your cart is empty!</div>
        ) : (
          <div className='cart-items'>
            <CartItem handleClose={handleClose} />
            <CartItem handleClose={handleClose} />
            <CartItem handleClose={handleClose} />
          </div>
        )}
      </div>

      <div className='cart-bottom'>
        <div className='cart-bottom__total'>Total</div>
        <div className='cart-bottom__price'>59.42$</div>
      </div>

      {/* <Link className='cart-btn primary' onClick={handleClose} to='/checkout'>Checkout</Link> */}
      <Link className='cart-btn primary' onClick={handleClose} to='/favoriten'>Favoriten</Link>
    </div>
  )
}