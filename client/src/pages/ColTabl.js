import React, {useCallback, useContext, useEffect, useState} from 'react'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'

export const ColTabl = () =>{
    const {loading, error,request} = useHttp()


    return(
        <div>
        1111111111111111111111
        </div>
)

}
export default ColTabl;