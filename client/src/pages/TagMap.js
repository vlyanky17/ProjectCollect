import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'


export const TagMap = ({ tags }) =>{

    if (!tags.length) {
        return <p className="center">нет тегов</p>
    }


    return (  <div>
       111111111111111
        </div>)
}

export default TagMap;