import React from 'react'
import styles from './Home.module.css'
import main_image from '../assets/first_image.png'
import main_image_mobile from '../assets/first_image_mobile.png'
import led from '../assets/led.png'
import { Link } from 'react-router-dom';
import useMedia from '../Hooks/useMedia';
import YoutubePlayer from "./YoutubePlayer";
import Carousel from './Carousel'
import youtubeIcon from '../assets/youtube-icon.svg'
import discIcon from '../assets/discord-icon.svg'
import instaIcon from '../assets/insta-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import twitterIcon from '../assets/x.png'
import footerImg from '../assets/footerImg.png'

const EnHome = () => {

  const mobile = useMedia('(max-width: 913px)');

  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.introDiv}>
          <h1 className={styles.intro}>
            WE BELIEVE THAT <span className={styles.specialWorldRed}>VIDEOGAMES</span> CAN BE TIMELESS WORKS OF <span className={styles.specialWorldBlue}>ART</span>.
          </h1>
        </div>
        <div>
          <img className={styles.mainImage} src={mobile ? main_image_mobile : main_image}/>
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUsTitle}>
          <h2>ABOUT US</h2>
          </div>
          <div className={styles.divImgAboutUs}>
          <img src={led} className={styles.aboutUsImg} />
          </div>
        </div>
        <p className={styles.secondBlockP}>
        Our mission is to develop games that place art at the heart of the experience, 
        combining stunning visuals, engaging narratives, and innovative gameplay.
        </p>
        <p className={styles.secondBlockP}>
        We have a YouTube channel called "Familia dev" where we post devlog videos about our entire journey of starting up, 
        growing the company, and developing SINA.
        </p>
        <Link to="https://www.youtube.com/@familiadev/featured" target="_blank">
        <div className={styles.btnAboutUs}>
          <button className={styles.btn}>CHECK OUT OUR CHANNEL</button>
        </div>
        </Link>
      </div>
      <div className={styles.thirdBlock}>
        <h2>PROJECT</h2>
        <p className={styles.secondBlockP}>In our first project, SINA, we embark on an epic adventure set in a universe abandoned by the gods. Players take on the role of Neeve, 
            a young person burdened with the responsibility of caring for their sick mother while searching for a cure.</p>
        <div className={styles.divVideoPlayer}>
          <div className={styles.videoPlayer}>
            <YoutubePlayer embedId="mdwX3ac1sfo" />
          </div>          
          <div className={styles.divBtnOurProject}>
          <Link to="https://store.steampowered.com/app/2822310/Sina/" target="_blank">
            <button className={styles.btn}>DOWNLOAD THE DEMO ON STEAM</button>
          </Link>
          </div>
        </div>
      </div>
      <div className={styles.forthBlock}>
        <div className={styles.aboutUsTitle}>
          <h2>GALLERY</h2>
          </div>
      </div>
      <Carousel />
      <div className={styles.contact}>
        <div className={styles.contactContent}>
          <h2>LET'S TALK?</h2>
        </div>
        <div className={styles.contatButton}>  
          <Link to="mailto:contato@triunfogamestudios.com?subject=Contact to Triunfo Games" >
            <button className={styles.btn}>GET IN TOUCH</button>
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
      <div className={styles.lastImageDiv}>
        <img className={styles.lastImage} src={footerImg} />
      </div>
    </div>
  )
}

export default EnHome