import React, { useState, useEffect } from 'react'
import PageLayout from '../../components/page-layout/page-layout'
import HomeStory from '../../components/home-story/home-story'

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
                <HomeStory key={index} description={story.description}
                 title={story.title} img={story.img} id={story._id} />
            )
        })
    }

    useEffect(() => {
        getStories()
    }, [getStories])

    return (
        <PageLayout>
            <div>
                {renderStories()}
            </div>
        </PageLayout>
    )
}

export default HomePage