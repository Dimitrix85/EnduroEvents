import React from 'react'
import styles from './submitButton.module.css'

const Button = ({ title, onClick }) => {
    return (
        <div className={styles.button}>
            <button type='submit' onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default Button