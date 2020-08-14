import React, { useState, useEffect } from 'react'
import PageLayout from '../../components/page-layout/page-layout'
import StoryCard from '../../components/story-card/story-card'

const HomePage = () => {

    const [data, setData] = useState([]);

    const getStories = async () => {
        const promise = await fetch('http://localhost:9999/api/story/top')
        const promiseJson = await promise.json()
        setData(promiseJson)
    }

    const renderStories = () => {
        return data.map((story, index) => {
            return (
                <StoryCard key={index} description={story.description}
                 title={story.title} img={story.img} id={story._id} />
            )
        })
    }

    useEffect(() => {
        getStories()
    }, [])

    return (
        <PageLayout>
            <div>
                <h1>Top liked stories</h1>
                {renderStories()}
            </div>
        </PageLayout>
    )
}

export default HomePage