import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../public/enduroLogo.png'
import Moutain from '../../public/wideMountain.png'
import Bicycle from '../../public/bicycle.png'

const Header = () => {

    return (
        <nav>
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={Logo} alt='EnduroLogo'></img>
                <div className={styles.navigation}>
                    <ul >
                        <li className={styles.listItem}>
                            <a href='/'>
                                Home
                        </a>
                        </li>
                        <li className={styles.listItem}>
                            <a href='/register'>
                                Motorcycle
                        </a>
                        </li>
                        <li className={styles.listItem}>
                            <a href='/register'>
                                Bicycle
                        </a>
                        </li>
                        <li className={styles.listItem}>
                            <a href='/register'>
                                Motorcycle
                        </a>
                        </li>
                    </ul>
                </div>
                <img className={styles.mountain} src={Moutain} alt='moutain'></img>
                <div className={styles.userNavigation}>
                    <ul>
                        <li className={styles.listItem}>
                            <a href='/'>
                                Register
                        </a>
                        </li>
                        <li className={styles.listItem}>
                            <a href='/register'>
                                Login
                        </a>
                        </li>
                    </ul>
                </div>
                <img className={styles.bicycle} src={Bicycle} alt='bicycle'></img>
            </div>
        </nav>
    )
}


export default Header