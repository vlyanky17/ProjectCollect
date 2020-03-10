import React from 'react';
import 'materialize-css'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes";
import {authPage} from "./pages/authPage";
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'

function App() {

  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
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
