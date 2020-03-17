import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import Tabl from "../pages/Tabl";
import 'materialize-css'


export const ToolNotAut = () =>{


    return(<div>

        <nav>
        <div className="nav-wrapper" style={{ padding: '0 2rem' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/Reg">Зарегистрироваться</a></li>

    <li><a href="/Aut">Авторизироваться</a></li>


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