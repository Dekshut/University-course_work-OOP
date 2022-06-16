import { Link } from 'react-router-dom'
import './LoginPopover.scss'

export default function LoginPopover({ handleClose }) {

  return (
    <div className='login'>
      <Link className='login-btn' onClick={handleClose} to='/login'>Login</Link>
      <Link className='login-btn__register' onClick={handleClose} to='/register'>Register</Link>
    </div>
  )
}