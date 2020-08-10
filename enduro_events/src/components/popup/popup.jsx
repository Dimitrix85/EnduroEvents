import React, { Fragment } from 'react'
import styles from './popup.module.css'

const Popup = ({message, action}) => {
    return (
        <Fragment>
            <div id="popup1" className={styles.overlay}>
                <div className={styles.popup}>
                    <h2>You need to change</h2>
                    <button className={styles.close} onClick={action}>&times;</button>
                    <div className={styles.content}>
                        {message}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Popup