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
                            <Link to='/'>
                                Home
                        </Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to='/story'>
                                Stories
                        </Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to='/enduro'>
                                Motorcycle
                        </Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to='/bicycle'>
                                Bicycle
                        </Link>
                        </li>
                    </ul>
                </div>
                <img className={styles.mountain} src={Moutain} alt='moutain'></img>
                <div className={styles.userNavigation}>
                    <ul>
                        <li className={styles.listItem}>
                            <Link to='/user/register'>
                                Register
                        </Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to='/user/login'>
                                Login
                        </Link>
                        </li>
                    </ul>
                </div>
                <img className={styles.bicycle} src={Bicycle} alt='bicycle'></img>
            </div>
        </nav>
    )
}


export default Header