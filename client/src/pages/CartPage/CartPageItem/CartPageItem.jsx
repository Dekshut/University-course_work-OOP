
import { Link } from 'react-router-dom';
import './CartPageItem.scss';
import img from '../../../images/product/0.jpg'
import InputAmount from '../../../components/InputAmount/InputAmount';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';

export default function CartPageItem() {

  return (
    <div className='cartPageItem'>
      <Link style={{margin: 0}} className='cartItem' to="/product">

        <img className='cartItem-img cartPageItem-img' src={img} alt='product' />
        <div className='cartItem-content'>
          <div className='cartItem-content__title'>Tie Belt Skirt</div>
          <div className='cartItem-content__price cartPageItem-price'>$29.99</div>
          <div className='cartItem-content__text'>
            <span>Color:</span>
            <div>red</div>
          </div>
          <div className='cartItem-content__text'>
            <span>Size:</span>
            <div>XL</div>
          </div>
          <div className='cartItem-content__text'>
            <span>Art.no.</span>
            <div>1047993002</div>
          </div>
        </div>
      </Link>

      <div className='cartItem-actions'>
        <InputAmount />

        <Button className='cartItem-actions__delete' color="error" variant="outlined">
          <DeleteOutlineIcon />
        </Button>

        <div>Total: 2999.99$</div>
      </div>
    </div>
  )
}