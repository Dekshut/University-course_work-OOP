import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function RegisterPage() {

  return (
    <main className="main">

      <Breadcrumbs title={'Register'} />

      <section class="modal">
        <div class="container">
          <div class="modal__links">
            <Link class="modal__link modal__link--active" to="/register">REGISTER</Link>
            <Link class="modal__link" to="/login">LOGIN</Link>
          </div>
          <form class="modal__form" action="#">
            <label class="modal__label">
              Username or email address*
              <input class="modal__input" type="text" required />
            </label>
            <label class="modal__label">
              Password*
              <input class="modal__input" type="password" required />
            </label>
            <p class="modal__text">
              A password will be sent to your email address.
            </p>
            <p class="modal__text">
              Your personal data will be used to support your experience throughout this website, to manage access to your
              account, and for other purposes described in our privacy policy.
            </p>
            <label class="modal__label">
              <input type="checkbox" />
              Agree with Terms & Conditions
            </label>
            <button class="modal__btn" type="submit">REGISTER</button>
          </form>
        </div>
      </section>

    </main>
  )
}