import React, { useContext, Fragment } from 'react'
import styles from './header.module.css'
import Logo from '../../public/enduroLogo.png'
import Moutain from '../../public/wideMountain.png'
import Bicycle from '../../public/bicycle.png'
import UserNavigation from '../navigation/user-navigation/user-navigation'
import PageNavigation from '../navigation/page-navigation/page-navigation'

const Header = () => {

    return (
        <nav>
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={Logo} alt='EnduroLogo'></img>
                <PageNavigation />
                <img className={styles.mountain} src={Moutain} alt='moutain'></img>
                <UserNavigation />
                <img className={styles.bicycle} src={Bicycle} alt='bicycle'></img>
            </div>
        </nav >
    )
}


export default Header