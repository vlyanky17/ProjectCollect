import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";

import 'materialize-css'


export const ForCab = () =>{

    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.userId
    return( <nav>
        <div className="nav-wrapper" style={{ padding: '0 2rem' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">

    <li><a >Добро пожаловать</a></li>
    </ul>
    </div>
    </nav>
);
}

export default ForCab;