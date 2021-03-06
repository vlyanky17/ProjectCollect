import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import Tabl from "../pages/Tabl";
import 'materialize-css'

export const ToolAdmin = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    const ReLog = event => {  const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.ResId, token: data.token,Adm: data.Adm,logn:data.ResLog,ResId: data.ResId,ResLog: data.ResLog

        }))
        console.log(data)}



    return(<div>

        <nav>
        <div className="nav-wrapper" style={{ padding: '0 ' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">

    <li><a href="/Cab">Личный кабинет</a></li>

    <li><a href="/AdminPage"   onClick={ReLog}>Администрирование </a></li>
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

export default ToolAdmin;