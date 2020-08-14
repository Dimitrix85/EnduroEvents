import React from 'react'
import { Link } from 'react-router-dom'
import styles from './story-card.module.css'

const StoryCard = ({title, description, img , id}) => {
    return (
        <div className={styles.divContainer}>
            <Link to={`/story/${id}`}>
                <img className={styles.image} src={img} alt="ima" />
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

export default StoryCard