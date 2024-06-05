import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
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