import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page'
import RegisterPage from './pages/register-page/register-page'
import LoginPage from './pages/login-page/login-page'
import ErrorPage from './pages/error-page/error-page'
import './index.module.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <App> */}
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/user/register' exact component={RegisterPage} />
        <Route path='/user/login' exact component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    {/* </App> */}
  </React.StrictMode>,
  document.getElementById('root')
);
