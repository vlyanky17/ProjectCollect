import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'
import ReactDOM from "react-dom";
import fr from "react-dropzone";

export const ForCol = () =>{


    return(  <div>
        <nav>
        <div className="nav-wrapper" style={{ padding: '0 2rem' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">


        <li><a  href="/Cab" >назад</a></li>
    <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>

    </div>
);
}
export default ForCol;