import React from 'react'
import { Link } from 'react-router-dom'
import styles from './page-navigation.module.css'


const PageNavigation = () => {
    return (
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
    )
}

export default PageNavigation