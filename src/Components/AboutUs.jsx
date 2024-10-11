import React from 'react'
import styles from './About.module.css'
import main_image from '../assets/Borda_Cima.png'
import led from '../assets/led.png'
import thiago from '../assets/Thiago.png'
import johnjohn from '../assets/John_John.png'
import arion from '../assets/Arion.png'
import { Link } from 'react-router-dom'
import useMedia from '../Hooks/useMedia'
import discIcon from '../assets/discord-icon.svg'
import instaIcon from '../assets/insta-icon.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import twitterIcon from '../assets/x.png'
import footerImg from '../assets/footerImg.png'
import { useTranslation } from 'react-i18next'
import CarouselAbout from './CarouselAbout'
import familiaDev from '../assets/Familiadev_Logo.png'

function AboutUs() {

    const mobile = useMedia('(max-width: 913px)');
    const { t } = useTranslation();

    return (
        <div className={styles.homeContainer}>
            <div className={styles.container}>
                <div className={styles.introDiv}>
                    <h1 className={styles.intro}>
                        {t('aboutUs')}
                    </h1>
                </div>
                <div>
                    <img className={styles.mainImage} src={main_image} />
                </div>
            </div>
            <div className={styles.secondBlock}>
                <div className={styles.aboutUs}>
                    <div className={styles.contentContainer}>
                        <div className={styles.selfieContainer}>
                            <img src={thiago} alt="" className={styles.selfie} />
                            <img src={arion} alt="" className={styles.selfie} />
                            <img src={johnjohn} alt="" className={styles.selfie} />
                        </div>
                        <div className={styles.textSelfies}>
                            <p className={styles.textSelfiesP}>{t('aboutFirstParagraph')}</p>
                            <p>{t('aboutSecondParagraph')}</p>
                            <p>{t('aboutThirdParagraph')}</p>
                        </div>
                    </div>
                    <p className={styles.aboutUsP}>{t('aboutRoomParagraph')}</p>
                </div>
            </div>
            <div className={styles.forthBlock}>
                <div className={styles.aboutUsTitle}>
                    <h2>{t('gallery')}</h2>
                </div>
                <div className={styles.divImgAboutUs}>
                    <img src={led} className={styles.aboutUsImg} />
                </div>
            </div>
            <CarouselAbout />
            <div className={styles.contact}>
                <div className={styles.contactContent}>
                    <h2>{t('letsTalk')}</h2>
                </div>
                <div className={styles.contatButton}>
                    <Link to="mailto:contato@triunfogamestudios.com?subject=Contact to Triunfo Games" >
                        <button className={styles.btn}>{t('getInTouch')}</button>
                    </Link>
                </div>
            </div>
            <div className={styles.bannerContainer}>
                <img className={styles.bannerFamiliaDev} src={familiaDev} alt="" />
                <Link to="https://www.youtube.com/@familiadev/featured" target="_blank">
                    <div className={styles.btnAboutUs}>
                        <button className={styles.btn}>{t('checkOurChannel')}</button>
                    </div>
                </Link>
            </div>
            <div className={styles.adjustMailParagraph}>
				<div className={styles.aboutUs}>
					<p>contato@triunfogamestudios.com</p>
                    <p>WhatsApp: +55 031 99280-2022</p>
				</div>
			</div>
            <div className={styles.socialMedia}>
                <div className={styles.socialMediaFirstItem}>
                    <Link className={styles.socialMediaLink} to='https://discord.gg/r9SaNZGBrX' target="_blank">
                        <img className={styles.socialMediaIcons} src={discIcon} />
                        <p>Discord</p>
                    </Link>
                </div>
                <div className={styles.socialMediaItem}>
                    <Link className={styles.socialMediaLink} to='https://www.instagram.com/triunfogamestudios' target="_blank">
                        <img className={styles.socialMediaIcons} src={instaIcon} />
                        <p>Instagram</p>
                    </Link>
                </div>
                <div className={styles.socialMediaItem}>
                    <Link className={styles.socialMediaLink} to='https://twitter.com/triunfostudios' target="_blank">
                        <img className={styles.socialMediaIcons} src={twitterIcon} />
                        <p>X/Twitter</p>
                    </Link>
                </div>
                <div className={styles.socialMediaLastItem}>
                    <Link className={styles.socialMediaLink} to='https://www.linkedin.com/company/triunfogamestudios/?viewAsMember=true' target="_blank">
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

export default AboutUs