import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import HomePage from './pages/home-page/home-page'
import RegisterPage from './pages/user-pages/register-page/register-page'
import LoginPage from './pages/user-pages/login-page/login-page'
import ErrorPage from './pages/error-page/error-page'
import CreateStory from './pages/story-pages/create-story/create-story'
import AllStories from './pages/story-pages/all-stories/all-stories'
import StoryDetails from './pages/story-pages/story-details/story-details'
import './index.module.css'

ReactDOM.render(
  <React.StrictMode>
    <App>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/user/register' exact component={RegisterPage} />
        <Route path='/user/login' exact component={LoginPage} />
        <Route path='/story/create' exact component={CreateStory} />
        <Route path='/story/' exact component={AllStories} />
        <Route path='/story/:id' exact component={StoryDetails} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
