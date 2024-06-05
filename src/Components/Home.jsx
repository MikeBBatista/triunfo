import React from 'react'
import styles from './Home.module.css'
import main_image from '../assets/first_image.png'
import led from '../assets/led.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.introDiv}>
          <h1 className={styles.intro}>
            ACREDITAMOS QUE OS <span className={styles.specialWorldRed}>VIDEOGAMES</span> PODEM SER OBRAS DE <span className={styles.specialWorldBlue}>ARTE</span> ATEMPORAIS.
          </h1>
        </div>
        <div>
          <img className={styles.mainImage} src={main_image} />
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.aboutUs}>
          <h2>SOBRE NÓS</h2>
          <img src={led} className={styles.aboutUsImg} />
        </div>
        <p className={styles.secondBlockP}>
          Nossa missão é desenvolver jogos que coloquem a arte no centro da experiência, combinando visuais deslumbrantes, 
          narrativas envolventes e jogabilidade inovadora.
        </p>
        <Link to="/aboutUs"><button className={styles.btn}>CONHEÇA NOSSA HISTÓRIA</button></Link>
      </div>
      <div className={styles.thirdBlock}>
        <h2>NOSSO PROJETO</h2>
      </div>
    </div>
  )
}

export default Home