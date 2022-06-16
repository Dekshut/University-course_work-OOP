import { Button } from '@mui/material';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import './CartPage.scss';
import CartPageItem from './CartPageItem/CartPageItem';
import img from '../../images/icons/paypal.png';
import { Link } from 'react-router-dom';

export default function CartPage() {

  return (
    <main className='main'>
      <Breadcrumbs title={'Favoriten'} />

      <section className='cartPage'>
        <div className='cartPage-items'>
          <CartPageItem />
          <CartPageItem />
          <CartPageItem />  
        </div>
        <div className='cartPage-actions'>    

          <div className='cartPage-actions__text'>
            <div>Total</div>
            <div>4445.31$</div>
          </div>

          <Link to='/contact' style={{ width: '100%', fontWeight: 700, marginTop: 20 }}>
            <Button style={{ width: '100%', fontWeight: 700 }} variant="contained">Contact Us</Button>
          </Link>

        </div>
      </section>
    </main>
  )
}