import React from 'react'
import styles from './Home.module.css'
import main_image from '../assets/first_image.png'
import led from '../assets/led.png'
import { Link } from 'react-router-dom';
import YoutubePlayer from "./YoutubePlayer";

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
          <div className={styles.aboutUsTitle}>
          <h2>SOBRE NÓS</h2>
          </div>
          <div className={styles.divImgAboutUs}>
          <img src={led} className={styles.aboutUsImg} />
          </div>
        </div>
        <p className={styles.secondBlockP}>
          Nossa missão é desenvolver jogos que coloquem a arte no centro da experiência, combinando visuais deslumbrantes, 
          narrativas envolventes e jogabilidade inovadora.
        </p>
        <Link to="/aboutUs">
        <div className={styles.btnAboutUs}>
          <button className={styles.btn}>CONHEÇA NOSSA HISTÓRIA</button>
        </div>
        </Link>
      </div>
      <div className={styles.thirdBlock}>
        <h2>NOSSO PROJETO</h2>
        <p className={styles.secondBlockP}>Em nosso primeiro projeto, <span className={styles.specialWorldRed}>SI</span><span className={styles.specialWorldBlue}>NA</span>, embarcamos em uma aventura épica ambientada em um universo [Gênero do Jogo] onde a arte é a força vital que molda o mundo. Os jogadores assumem o papel de [Protagonista], um [Descrição do Protagonista] que deve usar seus talentos artísticos para [Objetivo do Jogador].</p>
        <div className={styles.divVideoPlayer}>
          <div className={styles.videoPlayer}>
            <YoutubePlayer embedId="mdwX3ac1sfo" />
          </div>
          <div className={styles.divBtnOurProject}>
            <button className={styles.btn}>BAIXE O DEMO NA STEAM</button>
          </div>
        </div>
      </div>
      <div className={styles.thirdBlock}>
      <div className={styles.aboutUsTitle}>
          <h2>SLIDE SHOW</h2>
          </div>
      </div>
    </div>
  )
}

export default Home