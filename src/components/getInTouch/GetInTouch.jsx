import { useRef, useState } from 'react';
import style from '../getInTouch/GetInTouch.module.css';
import emailjs from '@emailjs/browser';

function GetInTouch() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputError, setInputError] = useState(null);
  const [buttonError, setButtonError] = useState(null);
  const [buttonStyle, setButtonStyle] = useState('default-button');

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    const cleanedPhoneNumber = inputPhoneNumber.replace(/\D/g, '');

    setPhoneNumber(cleanedPhoneNumber); // Всегда обновляем состояние номера

    if (cleanedPhoneNumber.length === 10) {
      setInputError(null); // Сбрасываем ошибку при вводе 10 цифр
      setButtonStyle('ContactBtnEnabled');
    } else {
      setInputError('');
      setButtonStyle('ContactBtnDisabled');
    }
  };

  const handleButtonClick = () => {
    if (phoneNumber.length !== 10) {
      setButtonError(
        'Enter 10 digits in your phone number until you do this, the form will not go!'
      );
    } else {
      setButtonError(null);
      // Здесь можно выполнить другие действия после ввода номера телефона
    }
  };

  const isButtonActive = !inputError;

  // Проверяем, можно ли активировать кнопку

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cdhxygj',
        'template_aw3k37q',
        form.current,
        '0JWYqHAGSItWVr6SQ'
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
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className={style.formPhone}
            placeholder="(099)___-__-__"
            name="your_phone"
          />
        </div>
        <textarea
          className={style.formMessage}
          name="message"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          onClick={handleButtonClick}
          className={buttonStyle}
          disabled={!isButtonActive} // Устанавливаем disabled на true, если кнопка не активна
        >
          {' '}
          Submit now
        </button>
        {inputError && <p className={style.error}>{inputError}</p>}
        {buttonError && <p className={style.error}>{buttonError}</p>}
      </form>
    </div>
  );
}

export default GetInTouch;
