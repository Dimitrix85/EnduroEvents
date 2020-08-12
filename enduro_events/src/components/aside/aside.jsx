import React from 'react'
import { Link } from 'react-router-dom'
import styles from './aside.module.css'


const Aside = () => {

    return (
        <aside className={styles.aside}>
            <ul>
                <li className={styles.listItem}>
                    <Link to='/story/create'>
                        Write your story
                        </Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/enduro/create'>
                        Create Motorcycle Event
                        </Link>
                </li>
                <li className={styles.listItem}>
                    <Link to='/bicycle/create'>
                        Create Bicycle  Event 
                        </Link>
                </li>
            </ul>
            <div className={styles.lastEvent}>
                <article>Last Motorcycle Event</article>
                <p>Karnare</p>
                <hr></hr>
                <article>Last Bicycle Event</article>
                <p>Vitosha 100 </p>
            </div>
        </aside>
    )
}

export default Aside