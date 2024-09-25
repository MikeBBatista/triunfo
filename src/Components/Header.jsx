import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import useMedia from '../Hooks/useMedia';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const mobile = useMedia('(max-width: 913px)');
    const [language, setLanguage] = useState('en');

    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname])

    const toStarterPage = () => {
        window.scrollTo(0, 0);
    }

    const changeLanguage = (lng) => {
        console.log(lng)
        i18n.changeLanguage(lng);
    };


    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(true);
        } else {
            setShow(false);
        }
        setLastScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);
    return (
        <div className={`${styles.active} ${show && styles.hidden}`}>
            <nav>
                <div className={styles.navDiv}>
                    <Link to="/" aria-label='Triunfo - Home' onClick={toStarterPage}>
                        <img className={styles.logo} src={logo} alt="" />
                    </Link>
                </div>
                {mobile && (
                    <button
                        aria-label='Menu'
                        className={`${styles.mobileBtn} ${mobileMenu && styles.mobileBtnActive}`}
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >
                    </button>
                )}
                <div className={`${mobile ? styles.navMobile : styles.navDiv} ${mobileMenu && styles.navMobileActive}`}>
    
                    <Link to="/" className={styles.links} onClick={toStarterPage}>{t('home')}</Link>

                    <Link to="/aboutUs" className={styles.links} onClick={toStarterPage} >{t('aboutUs')}</Link>

                    <Link className={styles.links}>
                        <select
                            className={styles.translateButton}
                            onChange={(e) => changeLanguage(e.target.value)}>
                            <option value="en">EN-US</option>
                            <option value="pt">PT-BR</option>
                        </select>
                    </Link>

                    {mobile && (
                        <Link to="mailto:contato@triunfogamestudios.com?subject=Contact to Triunfo Games" className={styles.links}>{t('getInTouch')}</Link>
                    )}
                    {!mobile && (
                        <Link to="mailto:contato@triunfogamestudios.com?subject=Contact to Triunfo Games"><button className={styles.btn}>{t('getInTouch')}</button></Link>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Header