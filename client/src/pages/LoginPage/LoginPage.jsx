import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function LoginPage() {
  const [succes, setSucces] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const requestFetch = (url, method, body = null) => {
    const headers = {
      'Content-Type': 'application/json'
    }

    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
    }).then(response => {
      return response.json()
    });
  }

  const onSubmit = () => {
    requestFetch('http://localhost:8080/api/user/login', 'POST', { email: email, password: password })
      .then(data => {
        console.log(data)
        if (data?.message) {
          setMessage(data.message)
          setSucces(false)
        } else {
          setSucces(true)
          setMessage('')
          navigate('/')
        }
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <main class="main">

      <Breadcrumbs title={'Login'} />

      <section class="modal">
        <div class="container">
          <div class="modal__links">
            <Link class="modal__link" to="/register">REGISTER</Link>
            <Link class="modal__link modal__link--active" to="/login">LOGIN</Link>
          </div>
          <form class="modal__form" action="#" onSubmit={(e) => { e.preventDefault(); onSubmit()}}>
            <label class="modal__label">
              Email address*
              <input class="modal__input" type="text" required onInput={(e) => setEmail(e.target.value)}/>
            </label>
            <label class="modal__label">
              Password*
              <input class="modal__input" type="password" required onInput={(e) => setPassword(e.target.value)}/>
            </label>
            {message && (
              <p class="modal__text" style={{ color: 'red' }}>
                {message}
              </p>
            )}
            <button class="modal__btn" type="submit">LOG IN</button>
            <Link class="modal__error" to="/contact">Lost your password?</Link>
          </form>
        </div>
      </section>

    </main>
  )
}