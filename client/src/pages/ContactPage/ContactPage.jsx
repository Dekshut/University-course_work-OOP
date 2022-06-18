import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {

  }

  return (
    <div className="ContactPage">
      <Breadcrumbs title={'contact'} />

      <section class="contact">
        <div class="container">
          <div class="contact__inner">
            <div class="contact__info">
              <h3 class="contact__info-title">
                Feel Free Don’t
                Hesitate To
                Contact With Us
              </h3>
              <p class="contact__info-text">
                If you contact customer us, your personal data will be processed in accordance with our privacy policy .
              </p>
              <ul class="contact__info-list">
                <li class="contact__info-item">
                  <a class="contact__info-phone" href="tel:+01234567896">+0-123-456-7896</a>
                  <a class="contact__info-phone" href="tel:+01234567896">+0-123-456-7896</a>
                </li>
                <li class="contact__info-item contact__info-item--location">
                  Ranlon Market 789 Road,<br />
                  Market Street, Newyork
                </li>
                <li class="contact__info-item contact__info-item--email">
                  <div>denismaloffev@gmail.com</div>
                  <div>malbo@gmail.com</div>
                </li>
              </ul>
            </div>
            <form class="contact__form" action="#" onSubmit={onSubmit}>
              <p class="contact__form-title">Contact Form</p>
              <div class="contact__form-box">
                <input required class="contact__form-input" type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
                <input required class="contact__form-input" type="email" placeholder="Your E-mail Address" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <input required class="contact__form-input" type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)}/>
              <textarea required class="contact__form-textarea" placeholder="Message here" onChange={(e) => setMessage(e.target.value)}></textarea>
              <button class="contact__form-btn" type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
