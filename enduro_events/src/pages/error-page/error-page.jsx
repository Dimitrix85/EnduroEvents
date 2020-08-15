import React from 'react'
import PageLayout from '../../components/page-layout/page-layout'
import styles from './error-page.module.css'

const ErrorPage = () => {
    return (
        <PageLayout>
            <div className={styles.cont}>
                <p>404</p>
            <span>Page not found</span>
            </div>
        </PageLayout>
    )
}

export default ErrorPage