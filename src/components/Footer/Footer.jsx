import logo from '../../images/logo.png';
import paypal from '../../images/icons/paypal.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="footer-top">
            <div class="footer-top__item footer-top__contact">
              <Link class="logo footer-top__logo" to="/">
                MALBO
              </Link>
              <a class="footer-top__address" href="https://www.google.com.ua/maps/place/342+Oxford+St,+London+W1C+1JG,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/@51.5150214,-0.1500586,17z/data=!3m1!4b1!4m5!3m4!1s0x4876052cadf5f10b:0x6bcfd7a8b4d8e96a!8m2!3d51.5150214!4d-0.1478699?hl=ru">
                No. 342 - London Oxford Street,
                012 United States
              </a>
              <a class="footer-top__email" href="mailto:Youremail@gmail.com">malbo@gmail.com</a>
              <a class="footer-top__phone" href="tel:+02838388393">+0283 838 8393</a>
              <ul class="footer-top__social-list">
                <li class="footer-top__social-item">
                  <a class="footer-top__social-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11pt"
                      height="18pt" viewBox="0 0 11 18" version="1.1">
                      <g>
                        <path
                          d="M 9.8125 9.84375 L 10.3125 6.675781 L 7.1875 6.675781 L 7.1875 4.617188 C 7.1875 3.753906 7.621094 2.910156 9.023438 2.910156 L 10.445312 2.910156 L 10.445312 0.214844 C 10.445312 0.214844 9.15625 0 7.925781 0 C 5.347656 0 3.667969 1.519531 3.667969 4.261719 L 3.667969 6.675781 L 0.804688 6.675781 L 0.804688 9.84375 L 3.667969 9.84375 L 3.667969 17.5 L 7.1875 17.5 L 7.1875 9.84375 Z M 9.8125 9.84375 " />
                      </g>
                    </svg>
                  </a>
                </li>
                <li class="footer-top__social-item">
                  <a class="footer-top__social-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14pt"
                      height="14pt" viewBox="0 0 14 14" version="1.1">
                      <g>
                        <path
                          d="M 12.5625 4.148438 C 12.570312 4.273438 12.570312 4.398438 12.570312 4.523438 C 12.570312 8.316406 9.683594 12.683594 4.40625 12.683594 C 2.78125 12.683594 1.269531 12.214844 0 11.398438 C 0.230469 11.425781 0.453125 11.433594 0.691406 11.433594 C 2.035156 11.433594 3.269531 10.980469 4.253906 10.207031 C 2.992188 10.179688 1.9375 9.355469 1.574219 8.21875 C 1.75 8.242188 1.925781 8.261719 2.113281 8.261719 C 2.371094 8.261719 2.628906 8.226562 2.871094 8.164062 C 1.554688 7.898438 0.570312 6.742188 0.570312 5.347656 L 0.570312 5.3125 C 0.949219 5.527344 1.394531 5.660156 1.867188 5.675781 C 1.09375 5.160156 0.585938 4.28125 0.585938 3.285156 C 0.585938 2.753906 0.726562 2.265625 0.976562 1.839844 C 2.390625 3.578125 4.511719 4.71875 6.894531 4.839844 C 6.847656 4.628906 6.824219 4.40625 6.824219 4.183594 C 6.824219 2.601562 8.101562 1.316406 9.691406 1.316406 C 10.519531 1.316406 11.265625 1.660156 11.789062 2.222656 C 12.4375 2.097656 13.058594 1.855469 13.609375 1.527344 C 13.394531 2.195312 12.941406 2.753906 12.347656 3.109375 C 12.925781 3.046875 13.484375 2.886719 14 2.664062 C 13.609375 3.234375 13.121094 3.738281 12.5625 4.148438 Z M 12.5625 4.148438 " />
                      </g>
                    </svg>
                  </a>
                </li>
                <li class="footer-top__social-item">
                  <a class="footer-top__social-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15pt"
                      height="17pt" viewBox="0 0 15 17" version="1.1">
                      <g>
                        <path
                          d="M 3.359375 14.875 L 0.246094 14.875 L 0.246094 4.945312 L 3.359375 4.945312 Z M 1.800781 3.589844 C 0.804688 3.589844 0 2.773438 0 1.785156 C 0 0.800781 0.804688 0 1.800781 0 C 2.796875 0 3.601562 0.800781 3.601562 1.785156 C 3.601562 2.773438 2.796875 3.589844 1.800781 3.589844 Z M 14.996094 14.875 L 11.894531 14.875 L 11.894531 10.039062 C 11.894531 8.886719 11.871094 7.410156 10.277344 7.410156 C 8.660156 7.410156 8.410156 8.664062 8.410156 9.957031 L 8.410156 14.875 L 5.304688 14.875 L 5.304688 4.945312 L 8.289062 4.945312 L 8.289062 6.296875 L 8.332031 6.296875 C 8.746094 5.519531 9.761719 4.695312 11.273438 4.695312 C 14.421875 4.695312 15 6.75 15 9.417969 L 15 14.875 Z M 14.996094 14.875 " />
                      </g>
                    </svg>
                  </a>
                </li>
                <li class="footer-top__social-item">
                  <a class="footer-top__social-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15pt"
                      height="15pt" viewBox="0 0 15 15" version="1.1">
                      <g>
                        <path
                          d="M 15 7.671875 C 15 11.816406 12.023438 14.765625 7.621094 14.765625 C 3.40625 14.765625 0 11.519531 0 7.5 C 0 3.480469 3.40625 0.234375 7.621094 0.234375 C 9.675781 0.234375 11.402344 0.953125 12.734375 2.136719 L 10.660156 4.039062 C 7.945312 1.539062 2.898438 3.414062 2.898438 7.5 C 2.898438 10.035156 5.023438 12.085938 7.621094 12.085938 C 10.640625 12.085938 11.773438 10.027344 11.949219 8.957031 L 7.621094 8.957031 L 7.621094 6.457031 L 14.878906 6.457031 C 14.949219 6.828125 15 7.1875 15 7.671875 Z M 15 7.671875 " />
                      </g>
                    </svg>
                  </a>
                </li>
                <li class="footer-top__social-item">
                  <a class="footer-top__social-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12pt"
                      height="16pt" viewBox="0 0 12 16" version="1.1">
                      <g>
                        <path
                          d="M 6.375 0.203125 C 3.167969 0.203125 0 2.339844 0 5.800781 C 0 8 1.238281 9.25 1.988281 9.25 C 2.296875 9.25 2.476562 8.386719 2.476562 8.144531 C 2.476562 7.851562 1.734375 7.234375 1.734375 6.023438 C 1.734375 3.511719 3.648438 1.730469 6.121094 1.730469 C 8.25 1.730469 9.824219 2.941406 9.824219 5.164062 C 9.824219 6.820312 9.160156 9.933594 7.003906 9.933594 C 6.226562 9.933594 5.558594 9.371094 5.558594 8.566406 C 5.558594 7.382812 6.382812 6.242188 6.382812 5.023438 C 6.382812 2.953125 3.449219 3.328125 3.449219 5.828125 C 3.449219 6.351562 3.515625 6.933594 3.75 7.414062 C 3.320312 9.269531 2.4375 12.035156 2.4375 13.945312 C 2.4375 14.539062 2.523438 15.117188 2.578125 15.710938 C 2.683594 15.828125 2.632812 15.816406 2.792969 15.757812 C 4.367188 13.601562 4.3125 13.179688 5.023438 10.355469 C 5.410156 11.085938 6.402344 11.480469 7.191406 11.480469 C 10.507812 11.480469 12 8.246094 12 5.332031 C 12 2.226562 9.320312 0.203125 6.375 0.203125 Z M 6.375 0.203125 " />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-top__item footer-top__nav">
              <h6 class="footer-top__title">Useful Links</h6>
              <ul class="footer-top__list">
                <li class="footer-top__item">
                  <a class="footer-top__link" href="#">Privacy Policy</a>
                </li>
                <li class="footer-top__item">
                  <a class="footer-top__link" href="#">Terms & Conditions</a>
                </li>
                <li class="footer-top__item">
                  <Link class="footer-top__link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div class="footer-top__item footer-top__nav">
              <h6 class="footer-top__title">My Account</h6>
              <ul class="footer-top__list">
                <li class="footer-top__item">
                  <a class="footer-top__link" href="/favoriten">Favoriten</a>
                </li>
                <li class="footer-top__item">
                  <Link class="footer-top__link" to="/login">Login</Link>
                </li>
                <li class="footer-top__item">
                  <Link class="footer-top__link" to='/register'>Registration</Link>
                </li>
              </ul>
            </div>
            <div class="footer-top__item footer-top__item-form">
              <h6 class="footer-top__title">About Us</h6>
              <p class="footer-top__text">
                The history of Malbo began in 2013. The founders - energetic and creative guys, brothers from a small town in the western part of Ukraine - decided to focus their activities on the development of Ukrainian streetwear culture. Ukrainians supported the youth brand and welcomed the appearance of new products.
              </p>
              {/* <form class="footer-top__form" action="#">
                <input class="footer-top__form-input" type="email" placeholder="Your email address" required />
                <button class="footer-top__form-btn" type="submit">Subscribe</button>
              </form> */}
            </div>
          </div>
          <div class="footer-bottom">
            <p class="footer-bottom__copy">© 2022 Denys & Karina AI-201. All Rights Reserved.</p>
            {/* <div class="footer-bottom__accept">
              We Accept
              <img class="footer-bottom__accept-img" src={paypal} alt="we accept paypal" />
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;