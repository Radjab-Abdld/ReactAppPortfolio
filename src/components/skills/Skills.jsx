import style from './Skills.module.css';

function Skills() {
  return (
    <div className={style.skills}>
      <h2 className={style.skillsTitle}>My Skills</h2>
      <div className={style.skillsBlocks}>
        <div className={style.skillsBlock}>
          <h2 className={style.skillsBlockTitle}>50%</h2>
          <p className={style.skillsBlockSubTitle}>HTML</p>
        </div>{' '}
        <div className={style.skillsBlock}>
          <h2 className={style.skillsBlockTitle}>50%</h2>
          <p className={style.skillsBlockSubTitle}>CSS</p>
        </div>{' '}
        <div className={style.skillsBlock}>
          <h2 className={style.skillsBlockTitle}>40%</h2>
          <p className={style.skillsBlockSubTitle}>JAVASCRIPT</p>
        </div>{' '}
        <div className={style.skillsBlock}>
          <h2 className={style.skillsBlockTitle}>30%</h2>
          <p className={style.skillsBlockSubTitle}>REACT</p>
        </div>{' '}
      </div>
    </div>
  );
}

export default Skills;
