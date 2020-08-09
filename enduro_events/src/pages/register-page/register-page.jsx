import React from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../components/page-layout/page-layout'
import styles from './register-page.module.css'

const RegisterPage = () => {
    return (
        <PageLayout>
            <div className={styles["login-box"]}>
                <h2>Login</h2>
                <form>
                    <div className={styles["user-box"]}>
                        <input type="text" id='usename' name="username" required=""></input>
                        <label for='username'>Username</label>
                    </div>
                    <div className={styles["user-box"]}>
                        <input type="password" id='password' name="password" required=""></input>
                        <label for='password'>Password</label>
                    </div>
                    <div className={styles["user-box"]}>
                        <input type="password" id='rePassword' name="rePassword" required=""></input>
                        <label for='rePassword'>Re-Password</label>
                    </div>
                    <Link to='/user/register'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                         Submit
                        </Link>
                </form>
            </div>
        </PageLayout>
    )
}

export default RegisterPage