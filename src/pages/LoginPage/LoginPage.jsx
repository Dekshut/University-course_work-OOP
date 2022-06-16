import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function LoginPage() {

  return (
    <main class="main">

      <Breadcrumbs title={'Login'} />

      <section class="modal">
        <div class="container">
          <div class="modal__links">
            <Link class="modal__link" to="/register">REGISTER</Link>
            <Link class="modal__link modal__link--active" to="/login">LOGIN</Link>
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
            <label class="modal__label">
              <input type="checkbox" />
              Remember me
            </label>
            <button class="modal__btn" type="submit">LOG IN</button>
            <Link class="modal__error" to="/contact">Lost your password?</Link>
          </form>
        </div>
      </section>

    </main>
  )
}