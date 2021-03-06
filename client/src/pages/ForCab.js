import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import ColTabl from "../pages/ColTabl";


import 'materialize-css'


export const ForCab = () =>{

    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.logn
    return( <div>
        <nav>
        <div className="nav-wrapper" style={{ padding: '0' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">

    <li><a >Добро пожаловать {us}</a></li>
    <li><a  href="/Col">Создать коллекцию</a></li>
    <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>
        <ColTabl />
    </div>
);
}

export default ForCab;