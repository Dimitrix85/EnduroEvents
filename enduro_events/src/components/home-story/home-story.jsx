import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home-story.module.css'

const HomeStory = ({title, description, img , id}) => {
    return (
        <div className={styles.divContainer}>
            <Link to={id}>
                <img className={styles.image} src={img} />
                <span className={styles.article}>
                    <span>
                        <h2>{title}</h2>
                    </span>
                    <p>
                        {description}
                    </p>
                </span>
            </Link>
        </div>

    )
}

export default HomeStory