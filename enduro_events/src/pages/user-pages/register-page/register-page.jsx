import React, { useState, useContext } from 'react'
import {  useHistory } from 'react-router-dom'
import PageLayout from '../../../components/page-layout/page-layout'
import styles from './register-page.module.css'
import Input from '../../../components/input/input'
import Popup from '../../../components/popup/popup'
import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Contex'
import Button from '../../../components/submitButton/submitButton'

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePasswor, setRePassword] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    const context = useContext(UserContext)
    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault()
        setError(false)

        if (username.length < 3) {
            setError(true)
            setMessage('Username must longer than 3 symbols')
            return
        }

        if(password !== rePasswor || password.length < 6){
            setError(true)
            setMessage('Password must match and longer than 6 symbols')
            return
        }

        await authenticate('http://localhost:9999/api/user/register',
            {
                username,
                password
            }, (user) => {
                context.logIn(user)
                history.push('/')
            }, (e) => {
                console.log('Error', e)
            })
    }


    return (
        <PageLayout>
            <div className={styles["login-box"]}>
                <h2>Register</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className={styles["user-box"]}>
                        <Input id='username' title="Username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className={styles["user-box"]}>
                        <Input type='password' id='password' title="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className={styles["user-box"]}>
                        <Input type='password' id='rePassword' title="Re-Password" onChange={e => setRePassword(e.target.value)} />
                    </div>
                   <Button title='Register' onClick={e => onSubmit(e)}/>
                </form>
            </div>
            { error ? <Popup message={message} action={()=> setError(false)}/> : <span></span>}
        </PageLayout>
    )
}

export default RegisterPage