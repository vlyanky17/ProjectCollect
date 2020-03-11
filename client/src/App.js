import React, { Component } from 'react';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {authPage} from "./pages/authPage";
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {useRoutes} from './routes'
import 'materialize-css'

class App extends Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.fetchUsers();
    };

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
        const {token} = useAuth()
        const routes = useRoutes(false)

        return (

        <Router>
        <div className="conteiner">
            {routes}
            </div>
            </Router>

    );
    }
}

export default App;
