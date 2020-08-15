import React from 'react'

const TableRow = ({ handler, event, userId, key }) => {

    const isJoined = event.participants && event.participants.includes(userId)

    const time = event.date.split('T')[0] + " " + event.date.split('T')[1]


    const joinHandler = async () => {

        const responce = await fetch(`http://localhost:9999/api/enduro/${event._id}`, {
            method: 'PUT',
            body: JSON.stringify({ userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const jsonData = await responce.json()
        handler(jsonData)
    }

    return (
        <tr key={key}>
            <td>{time}</td>
            <td>{event.startPoint}</td>
            <td>{event.skillLevel}</td>
            <td>{event.participants.length}</td>
            {userId ?
                <td>
                    {isJoined ? (
                        (<p>Joined</p>)
                    ) :
                        <button onClick={e => joinHandler()}>Join</button>
                    }
                </td> :
                null
            }
        </tr>
    )
}

export default TableRow