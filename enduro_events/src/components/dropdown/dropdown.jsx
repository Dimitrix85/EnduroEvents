import React from 'react'
import { Link } from 'react-router-dom'
import styles from './dropdown.module.css'

const DropDown = ({ title, url, links }) => {



    return (
        <li className={styles.listItem}>
            <div className={styles.dropdown}>
                <Link to={url}>
                    {title}
                </Link>
                <div className={styles['dropdown-content']}>
                    {links.map(x => {

                        return (
                            <Link to={x.url}>
                                {x.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </li>
    )
}

export default DropDown