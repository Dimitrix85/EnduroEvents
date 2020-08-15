import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page'
import RegisterPage from './pages/user-pages/register-page/register-page'
import LoginPage from './pages/user-pages/login-page/login-page'
import ErrorPage from './pages/error-page/error-page'
import CreateStory from './pages/story-pages/create-story/create-story'
import AllStories from './pages/story-pages/all-stories/all-stories'
import StoryDetails from './pages/story-pages/story-details/story-details'
import CreateEnduro from './pages/enduro-pages/create-enduro/create-enduro'
import UserContext from './Contex'

const Navigation = () => {

    const context = useContext(UserContext)
    const loggedIn = context.user && context.loggedIn

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/user/register'>
                    {loggedIn ? (<HomePage />) : (<RegisterPage />)}
                </Route>
                <Route path='/user/login'>
                    {loggedIn ? (<HomePage />) : (<LoginPage />)}
                </Route>
                <Route path='/story/create'>
                    {loggedIn ? (<CreateStory />) : (<LoginPage />)}
                </Route>
                        <Route path='/story/' exact component={AllStories} />
                        <Route path='/story/:id' exact component={StoryDetails} />

                        <Route path='/enduro/create'>
                            {loggedIn ? (<CreateEnduro />) : (<LoginPage />)}
                </Route>
                                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation