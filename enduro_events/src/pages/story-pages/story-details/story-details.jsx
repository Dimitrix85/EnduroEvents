import React, { Fragment, useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../../Contex'
import PageLayout from '../../../components/page-layout/page-layout'

const StoryDetails = (props) => {
    const [story, setStory] = useState({})

    // const context = useContext(UserContext)
    const history = useHistory()

    const getStory = async (id) => {

        const response = await fetch(`http://localhost:9999/api/story/details?id=${id}`)

        if (!response.ok) {
            history.push('/error')
        }

        const story = await response.json()
        setStory(story && story)

        console.log(story)
    }
    useEffect(() => {
        getStory(props.match.params.id)
    }, [])

    return (
        <PageLayout>
            <div>{story.title}</div>
        </PageLayout>
    
    )
}

export default StoryDetails