import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(true); 
      console.log('teste');
    } else { // if scroll up show the navbar
      setShow(false);  
    }

    // remember current page location to use in the next move
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
    <div className={`active ${show && styles.hidden}`}>
        <nav>
            <div className={styles.navDiv}>
                <Link to="/" aria-label='Triunfo - Home'>
                <img className={styles.logo} src={logo} alt="" />
                </Link>
            </div>
            <div className={styles.navDiv}>
            <Link to="/" className={styles.links}>INÍCIO</Link>
            <Link to="/aboutUs" className={styles.links}>SOBRE NÓS</Link>
            <Link to="/contact"><button className={styles.btn}>ENTRE EM CONTATO</button></Link>
            </div>
        </nav>
    </div>
  )
}

export default Header