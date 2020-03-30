import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import Tabl from "../pages/Tabl";
import 'materialize-css'
import ForCol from "./ForCol";


export const ToolNotAut = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return(<div>

        <nav>
        <div className="nav-wrapper" style={{ padding: '0 ' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">


    <li><a href="/Cab">Личный кабинет</a></li>
    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
    </ul>
    </div>
    </nav>
    <form>
    < Tabl  />
    </form>


    </div>
);
}

export default ToolNotAut;