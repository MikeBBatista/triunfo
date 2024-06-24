import React from 'react'
import styles from './Home.module.css'
import main_image from '../assets/first_image.png'
import led from '../assets/led.png'
import { Link } from 'react-router-dom';
import YoutubePlayer from "./YoutubePlayer";
import Carousel from './Carousel'
import youtubeIcon from '../assets/youtube-icon.svg'
import discIcon from '../assets/discord-icon.svg'
import instaIcon from '../assets/insta-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import twitterIcon from '../assets/x.png'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
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
        <p className={styles.secondBlockP}>
        Temos um canal no youtube chamado Familia dev onde postamos devlog videos sobre todo nosso processo de abertura, 
        crescimento da empresa e desenvolvimento do SINA.
        </p>
        <Link to="https://www.youtube.com/@familiadev/featured" target="_blank">
        <div className={styles.btnAboutUs}>
          <button className={styles.btn}>CONHEÇA NOSSO CANAL</button>
        </div>
        </Link>
      </div>
      <div className={styles.thirdBlock}>
        <h2>NOSSO PROJETO</h2>
        <p className={styles.secondBlockP}>Em nosso primeiro projeto, SINA, embarcamos em uma aventura épica ambientada em um universo abandonado pelos deuses. Os jogadores assumem o papel de Neeve, um jovem que carrega a responsabilidade de cuidar de sua mãe doente enquanto busca por uma cura.</p>
        <div className={styles.divVideoPlayer}>
          <div className={styles.videoPlayer}>
            <YoutubePlayer embedId="mdwX3ac1sfo" />
          </div>          
          <div className={styles.divBtnOurProject}>
          <Link to="https://store.steampowered.com/app/2822310/Sina/" target="_blank">
            <button className={styles.btn}>BAIXE O DEMO NA STEAM</button>
          </Link>
          </div>
        </div>
      </div>
      <div className={styles.forthBlock}>
        <div className={styles.aboutUsTitle}>
          <h2>SLIDE SHOW</h2>
          </div>
      </div>
      <Carousel />
      <div className={styles.contact}>
        <div className={styles.contactContent}>
          <h2>VAMOS CONVERSAR?</h2>
        </div>
        <div className={styles.contatButton}>  
          <Link to="mailto:contato@triunfogamestudios.com?subject=Contact to Triunfo Games" >
            <button className={styles.btn}>ENTRE EM CONTATO</button>
          </Link>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaFirstItem}>
          <Link to='https://www.youtube.com/@familiadev/featured' target="_blank">
            <img className={styles.socialMediaIcons} src={youtubeIcon} />
            <p>Youtube</p>
          </Link>
        </div>
          <div className={styles.socialMediaItem}>
            <Link to='https://discord.gg/r9SaNZGBrX' target="_blank">
              <img className={styles.socialMediaIcons} src={discIcon} />
              <p>Discord</p>
            </Link>
          </div>
          <div className={styles.socialMediaItem}>
            <Link to='https://www.instagram.com/triunfogamestudios' target="_blank">
              <img className={styles.socialMediaIcons} src={instaIcon} />
              <p>Instagram</p>
            </Link>
          </div>
          <div className={styles.socialMediaItem}>
            <Link to='https://twitter.com/triunfostudios' target="_blank">
              <img className={styles.socialMediaIcons} src={twitterIcon} />
              <p>X</p>
            </Link>
          </div>
          <div className={styles.socialMediaLastItem}>
            <Link to='https://www.linkedin.com/company/triunfogamestudios/?viewAsMember=true' target="_blank">
              <img className={styles.socialMediaIcons} src={linkedinIcon} />
              <p>Linkedin</p>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home