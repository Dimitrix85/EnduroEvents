import React, { useContext, Fragment } from 'react'
import styles from './header.module.css'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../public/enduroLogo.png'
import Moutain from '../../public/wideMountain.png'
import Bicycle from '../../public/bicycle.png'
import UserContext from '../../Contex'

const Header = () => {

    const context = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        context.logOut()
        history.push('/')
    }

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
                        {context.loggedIn ? (
                            <Fragment>
                                <li className={styles.listItem}>
                                    <Link to={`/user/${context.user && context.user.id}`}>
                                        {context.user && context.user.username}
                                    </Link>
                                </li>
                                <li className={styles.listItem}>
                                    <Link onClick={() => logout()}>
                                        Logout
                        </Link>
                                </li>

                            </Fragment>
                        ) : (
                                <Fragment>
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
                                </Fragment>
                            )}
                    </ul>
                </div>
                <img className={styles.bicycle} src={Bicycle} alt='bicycle'></img>
            </div>
        </nav >
    )
}


export default Header