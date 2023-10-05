import style from './AboutMe.module.css';
import aboutCardImg from '../accest/Group 14.svg';

function AboutMe() {
  return (
    <div className={style.aboutMe} id="About">
      <h2 className={style.aboutMeTitle}>About</h2>
      <p className={style.aboutMeSubTitle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
      </p>

      <div className={style.aboutMeGridCard}>
        <div className={style.aboutMeCardOne}>
          <img src={aboutCardImg} alt="myIconCard" />
          <h4 className={style.aboutCardTitle}>Full Name</h4>
          <p className={style.aboutCardSubTitle}>Sheyn Daniel</p>
        </div>
        <div className={style.aboutMeCardOne}>
          <img src={aboutCardImg} alt="myIconCard" />
          <h4 className={style.aboutCardTitle}>Email Address</h4>
          <p className={style.aboutCardSubTitle}>email@gmail.com</p>
        </div>
        <div className={style.aboutMeCardOne}>
          <img src={aboutCardImg} alt="myIconCard" />
          <h4 className={style.aboutCardTitle}>Instagram</h4>
          <p className={style.aboutCardSubTitle}>Instagram.com</p>
        </div>
        <div className={style.aboutMeCardOne}>
          <img src={aboutCardImg} alt="myIconCard" />
          <h4 className={style.aboutCardTitle}>Phone</h4>
          <p className={style.aboutCardSubTitle}>+380990090088</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
