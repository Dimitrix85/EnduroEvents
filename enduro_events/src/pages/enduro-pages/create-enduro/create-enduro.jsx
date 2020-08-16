import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import PageLayout from '../../../components/page-layout/page-layout'
import styles from './create-enduro.module.css'
import Button from '../../../components/submitButton/submitButton'
import Input from '../../../components/input/input'
import Popup from '../../../components/popup/popup'
import UserContext from '../../../Contex';


const CreateEnduro = () => {

    const [date, setDate] = useState()
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [skillLevel, setSkillLevel] = useState('')
    const [startPoint, setStartPoint] = useState()

    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubbmit = async (e) => {
        e.preventDefault()
        setError(false)
        if (!skillLevel || !startPoint || !date) {
            setMessage("All fields are require")
            setError(true)
            return
        }

        const body = {
            startPoint,
            date,
            skillLevel,
            author: context.user.id
        }
        await fetch('http://localhost:9999/api/enduro/', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        history.push('/enduro')
    }

    return (
        <PageLayout>
            <div className={styles["login-box"]}>
                <h2>Create enduro event</h2>
                <form onSubmit={e => handleSubbmit(e)}>
                    <div className={styles["user-box"]}>
                        <Input id='startPoint' title="Start point" onChange={e => setStartPoint(e.target.value)} />
                    </div>
                    <div className={styles.dropdown}>
                        <select className={styles['select-css']} name="cars" id="cars" onChange={e => setSkillLevel(e.target.value)}>
                            <option>Choose skill level</option>
                            <option value="easy">Easy</option>
                            <option value="advance">Advance</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className={styles["user-box"]}>
                        <input type="datetime-local" id="date" name="date" defaultValue={date}
                            onChange={e => setDate(e.target.value)} />
                    </div>
                    <Button title='Create' onClick={e => handleSubbmit(e)} />
                </form>
            </div>
            {error ? <Popup message={message} action={() => setError(false)} /> : <span></span>}
        </PageLayout>
    );

}

export default CreateEnduro