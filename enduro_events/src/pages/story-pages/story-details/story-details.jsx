import React, { useState, useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import UserContext from '../../../Contex'
import PageLayout from '../../../components/page-layout/page-layout'
import styles from './story-details.module.css'
import LikeIcon from '../../../public/like.png'

const StoryDetails = (props) => {
    const [story, setStory] = useState({})
    const [date, setDate] = useState('')
    const [author, setAuthor] = useState('')
    const [likes, setLikes] = useState('')

    const context = useContext(UserContext)
    const history = useHistory()

    const getStory = async (id) => {

        const response = await fetch(`http://localhost:9999/api/story/details?id=${id}`)

        if (!response.ok) {
            history.push('/error')
        }

        const story = await response.json()
        setLikes(story.like)
        setStory(story && story)
        setDate(story.created_at.toString().split('T')[0])
        setAuthor(story.author.username)
    }

    const updateLike = async () => {
        const updated = await fetch(`http://localhost:9999/api/story/${props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify({userId:context.user.id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const updatedJson = await updated.json()

        setLikes(updatedJson.like)
    }

    useEffect(() => {
        getStory(props.match.params.id)
    }, [])

    return (
        <PageLayout>
            <div className={styles.details}>
                <h1>{story.title}</h1>
                <img src={story.img} alt="img" />
                <p>{story.description}</p>
                <div>
                    <span>{date}</span>
                    <span>
                        <Link onClick={updateLike}>
                            <img width="30px" src={LikeIcon}/> {likes}
                        </Link>
                    </span>
                    <span>
                        Author: {author}
                    </span>
                </div>
            </div>
        </PageLayout>

    )
}

export default StoryDetails