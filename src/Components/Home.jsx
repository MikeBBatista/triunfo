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
import { useTranslation } from 'react-i18next'

const Home = () => {

	const mobile = useMedia('(max-width: 913px)');
	const { t } = useTranslation();

	return (
		<div className={styles.homeContainer}>
			<div className={styles.container}>
				<div className={styles.introDiv}>
					<h1 className={styles.intro}>
						{t('principal1')} <span className={styles.specialWorldRed}>{t('principal2')}</span>{t('principal3')}<span className={styles.specialWorldBlue}>{t('principal4')}</span> {t('principal5')}
					</h1>
				</div>
				<div>
					<img className={styles.mainImage} src={mobile ? main_image_mobile : main_image} />
				</div>
			</div>
			<div className={styles.secondBlock}>
				<div className={styles.aboutUs}>
					<div className={styles.aboutUsTitle}>
						<h2>{t('aboutUs')}</h2>
					</div>
					<div className={styles.divImgAboutUs}>
						<img src={led} className={styles.aboutUsImg} />
					</div>
				</div>
				<div className={styles.adjustParagraph}>
					<p className={styles.secondBlockP}>
						{t('aboutUsFirstP') + ' ' + t('aboutUsSecondP')}
					</p>
				</div>
				<Link to="/aboutUs">
					<div className={styles.btnAboutUs}>
						<button className={styles.btn}>{t('more')}</button>
					</div>
				</Link>
			</div>
			<div className={styles.thirdBlock}>
				<h2>{t('project')}</h2>
				<div className={styles.adjustParagraph}>
					<p className={styles.secondBlockP}>{t('projectP1')}</p>
					<p className={styles.secondBlockP}>{t('projectP2')}</p>
				</div>
				<div className={styles.divVideoPlayer}>
					<div className={styles.videoPlayer}>
						<YoutubePlayer embedId="uHT_WNI5Gm0?si=5rBTT_nZ9ephi-7R" />
					</div>
					<div className={styles.divBtnOurProject}>
						<Link to="https://store.steampowered.com/app/2822310/Sina/" target="_blank">
							<button className={styles.btn}>{t('downloadButton')}</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.forthBlock}>
				<div className={styles.aboutUsTitle}>
					<h2>{t('gallery')}</h2>
				</div>
			</div>
			<Carousel />
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
			<div className={styles.adjustMailParagraph}>
				<div className={styles.aboutUs}>
					<p>contato@triunfogamestudios.com</p>
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
						<p>X/Twitter</p>
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

export default Home