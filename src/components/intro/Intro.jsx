import style from './Intro.module.css';
import introImg from '../accest/hearing-issues-collage-design.jpg';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <div className="containerWidth">
      <div className={style.intro} id="Intro">
        <div className={style.introContainer}>
          <span className={style.introTitle}>
            Hi, I am <br /> Sheyn Daniel
          </span>
          <p className={style.introSubTitle}>Frontend Developer</p>
          <div>
            <Link>
              <button className={style.introBtnLeft}>Download CV</button>
            </Link>
            <Link>
              <button className={style.introBtnRight}>Learn More</button>
            </Link>
          </div>
        </div>
        <img
          src={introImg}
          alt="ImgProfile"
          className={style.introImgProfile}
        />
      </div>
    </div>
  );
}

export default Intro;
