import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";



import 'materialize-css'


export const AdminPage = () =>{

    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.logn
    return( <div>
        <nav>
        <div className="nav-wrapper" style={{ padding: '0' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">



    <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>

    </div>
);
}

export default AdminPage;