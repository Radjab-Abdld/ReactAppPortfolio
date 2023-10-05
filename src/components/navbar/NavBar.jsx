import { Link } from 'react-scroll';
import style from './NavBar.module.css';
import { useState } from 'react';

function NavBar() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 400) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener('scroll', setFixed);
  return (
    <nav className={fix ? 'navbar fixed' : 'navbar'}>
      <Link
        activeClass="active"
        to="Intro"
        spy={true}
        smooth={true}
        offset={-200}
        duration={1000}
        className={style.HomeRestart}
      >
        <h1>Portfolio</h1>
      </Link>

      <div className={style.navbarMenu}>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className={style.navbarMenuItem}
        >
          About me
        </Link>
        <Link
          activeClass="active"
          to="Services"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className={style.navbarMenuItem}
        >
          Services
        </Link>
        <Link
          activeClass="active"
          to="Contact me"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className={style.navbarMenuItem}
        >
          Contact me
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
