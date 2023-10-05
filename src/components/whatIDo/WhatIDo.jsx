import style from './WhatIDo.module.css';
import CardImg from '../accest/svgIcondvr.svg';

function WhatIDo() {
  return (
    <div className={style.whatIDo} id="Services">
      <h2 className={style.whatIDoTitle}>What i do</h2>
      <div className={style.whatIDoCards}>
        <div className={style.whatIDoCard}>
          <img src={CardImg} alt="" className={style.whatIDoCardImg} />
          <h3 className={style.whatIDoCardTitle}>Web Development</h3>
        </div>
        <div className={style.whatIDoCardActive}>
          <img src={CardImg} alt="" className={style.whatIDoCardImg} />
          <h3 className={style.whatIDoCardTitle}>Web Development</h3>
        </div>
        <div className={style.whatIDoCard}>
          <img src={CardImg} alt="" className={style.whatIDoCardImg} />
          <h3 className={style.whatIDoCardTitle}>Web Development</h3>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
