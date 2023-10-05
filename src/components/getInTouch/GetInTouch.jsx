import { useRef } from 'react';
import style from '../getInTouch/GetInTouch.module.css';
import emailjs from '@emailjs/browser';

function GetInTouch() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_76zc9gs',
        'template_4ggbgr8',
        form.current,
        'nX7PLIPQ4CNB0s1XE'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.getInTouch} id="Contact me">
      <h2 className={style.getInTouchTitle}>Get in touch</h2>

      <form ref={form} onSubmit={sendEmail} className={style.getInTouchForm}>
        <div className={style.inputBlock}>
          <input
            type="text"
            className={style.formName}
            placeholder="Name"
            name="your_name"
            required
          />
          <input
            type="text"
            className={style.formLastName}
            placeholder="Last name"
            name="your_lastname"
            required
          />
          <input
            type="email"
            className={style.formEmail}
            placeholder="Email"
            name="your_email"
            required
          />
          <input
            type="tel"
            className={style.formPhone}
            placeholder="Phone number"
            name="your_number"
          />
        </div>
        <textarea
          className={style.formMessage}
          name="message"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button type="submit" value="Send" className={style.formBtn}>
          Submit now
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;
