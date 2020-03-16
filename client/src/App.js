import React, { Component } from 'react';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {authPage} from "./pages/authPage";
import {useAuth} from './auth.hook'
import {AuthContext} from './context/AuthContext'
import {useRoutes} from './routes'
import 'materialize-css'

function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = "Adm"
    console.log(isAuthenticated)
    const routes = useRoutes(isAuthenticated)
    return(
        <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
    }}>
<Router>
    <div className="conteiner">
        {routes}


        </div>
        </Router>
        </AuthContext.Provider>
)
}

export default App;
