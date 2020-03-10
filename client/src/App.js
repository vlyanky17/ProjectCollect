import React, { Component } from 'react';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import axios from 'axios';
import './App.css';
import 'materialize-css'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes";
import {authPage} from "./pages/authPage";
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
class App extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.fetchUsers();
  };
  const {token, login, logout, userId, ready} = useAuth()
const isAuthenticated = !!token
const routes = useRoutes(isAuthenticated)
  fetchUsers = () => {
    axios.get('/users')
      .then((response) => {
        const { users } = response.data;
        this.setState({ users: [...this.state.users, ...users] })
      })
      .catch(() => alert('Error fetching new users'));
  };


  addUser = ({ name, position, company }) => {
    this.setState({
      users: [...this.state.users, { name, position, company }]
    });
  };

  render() {
    return (
      <div className="App">
        <Form addUser={this.addUser}/>
        < DisplayUsers users={this.state.users} />

      </div>
    );
  }
}

export default App;
