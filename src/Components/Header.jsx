import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import useMedia from '../Hooks/useMedia';

const Header = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobile = useMedia('(max-width: 913px)');
  
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  const toHome = () => {
    window.scrollTo(0, 0);
  }


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
                <Link to="/triunfo" aria-label='Triunfo - Home' onClick={toHome}>
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
              <Link to="/triunfo" className={styles.links} onClick={toHome}>INÍCIO</Link>
              
              {mobile && (
                <Link to="mailto:contato@triunfogamestudios.com?subject=Contact to Triunfo Games" className={styles.links}>ENTRE EM CONTATO</Link>
              )}
              {!mobile && (
              <Link to="mailto:contato@triunfogamestudios.com?subject=Contact to Triunfo Games"><button className={styles.btn}>ENTRE EM CONTATO</button></Link>
              )}
            </div>
        </nav>
    </div>
  )
}

export default Header