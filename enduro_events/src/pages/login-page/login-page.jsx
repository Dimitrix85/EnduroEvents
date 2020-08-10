import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PageLayout from '../../components/page-layout/page-layout'
import styles from './login-page.module.css'
import Input from '../../components/input/input'
import Popup from '../../components/popup/popup'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Contex'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    const context = useContext(UserContext)
    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault()
        setError(false)


        await authenticate('http://localhost:9999/api/user/login',
            {
                username,
                password
            }, (user) => {
                context.logIn(user)
                history.push('/')
            }, (e) => {
                setError(true)
                setMessage("Invalid username or password")
            })
    }


    return (
        <PageLayout>
            <div className={styles["login-box"]}>
                <h2>Login</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className={styles["user-box"]}>
                        <Input id='username' title="Username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className={styles["user-box"]}>
                        <Input type='password' id='password' title="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <Link onClick={e => onSubmit(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                         Login
                        </Link>
                </form>
            </div>
            { error ? <Popup message={message} action={()=> setError(false)}/> : <span></span>}
        </PageLayout>
    )
}

export default LoginPage