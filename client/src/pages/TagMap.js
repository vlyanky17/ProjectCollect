import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'


export const TagMap = ({tag}) =>{

    if (!tag.length) {
        return <p className="center">нет тегов</p>
    }

    return (1111111111111)
}

export default TagMap;