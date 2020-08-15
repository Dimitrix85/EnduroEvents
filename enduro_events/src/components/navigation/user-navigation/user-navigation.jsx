import React, { useContext, Fragment } from 'react'
import UserContext from '../../../Contex'
import { Link, useHistory } from 'react-router-dom'
import styles from './user-navigation.module.css'


const UserNavigation = () => {

    const context = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        context.logOut()
        history.push('/')
    }

    return (
        <div className={styles.userNavigation}>
            <ul>
                {context.loggedIn ? (
                    <Fragment>
                        <li className={styles.listItem}>
                            <a>
                                {context.user && context.user.username}
                            </a>
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
    )
}

export default UserNavigation