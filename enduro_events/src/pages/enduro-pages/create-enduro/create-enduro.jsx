import React, { useState } from 'react';
import PageLayout from '../../../components/page-layout/page-layout'
import styles from './create-enduro.module.css'
import Button from '../../../components/submitButton/submitButton'
import Input from '../../../components/input/input'
import Popup from '../../../components/popup/popup'


const CreateEnduro = () => {

    const [date, setDate] = useState(new Date())
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubbmit = (e) => {
        e.preventDefault()
        console.log('test')
        console.log(date)
    }

    return (
        <PageLayout>
            <div className={styles["login-box"]}>
                <h2>Login</h2>
                <form onSubmit={e => handleSubbmit(e)}>
                    <div className={styles["user-box"]}>
                        <Input id='username' title="Username"  />
                    </div>
                    <div className={styles["user-box"]}>
                        <Input type='password' id='password' title="Password"/>
                    </div>
                    <div>
                    <input type="datetime-local" id="date" name="date" defaultValue={date}
                        onChange={e => setDate(e.target.value)} />
                    </div>

                    <Button title='Login' onClick={e => handleSubbmit(e)} />
                </form>
            </div>
            {error ? <Popup message={message} action={() => setError(false)} /> : <span></span>}
            {/* <div className={styles.dateTime}>
                <form onSubmit={e => handleSubbmit(e)}>
                    <input type="datetime-local" id="date" name="date" defaultValue={date}
                        onChange={e => setDate(e.target.value)} />
                </form>
                <Button title='Create' onClick={e => handleSubbmit(e)} />
            </div> */}
        </PageLayout>
    );

}

export default CreateEnduro