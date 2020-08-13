import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import HomePage from './pages/home-page/home-page'
import RegisterPage from './pages/user-pages/register-page/register-page'
import LoginPage from './pages/user-pages/login-page/login-page'
import ErrorPage from './pages/error-page/error-page'
import CreateStory from './pages/story-pages/create-story/create-story'
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
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
