import React, { useState, useEffect, useMemo, useContext } from 'react'
import styles from './all-enduro.module.css'
import PageLayout from '../../../components/page-layout/page-layout'
import TableRow from '../../../components/tableRow/tableRow'
import UserContext from '../../../Contex'

const AllEnduro = () => {

    const [data, setData] = useState([])
    const context = useContext(UserContext)

    const receivedData = async () => {

        const res = await fetch(`http://localhost:9999/api/enduro`)

        const jsonData = await res.json()

        setData(jsonData)
    }

    const updateData = (updatedData) => {
        console.log(updatedData)
        setData(updatedData)
    }

    const renderEvents = useMemo(() => {
        const userId = context.user && context.user.id
        return data.map((event, index) => {
            return (
                <TableRow key={index} event={event} userId={userId} handler={updateData} />
            )
        })
    }, [data])

    useEffect(() => {
        receivedData()
    }, [])

    return (
        <PageLayout>
            <div>
                <table className={styles.customers}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Poin</th>
                            <th>Skill level</th>
                            <th>Participants</th>
                            {context.loggedIn ? <th>Join</th> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {renderEvents}
                    </tbody>
                </table>
            </div>
        </PageLayout>
    )
}

export default AllEnduro