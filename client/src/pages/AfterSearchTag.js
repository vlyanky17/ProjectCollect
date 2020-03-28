import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'



export const AfterSearchTag = () =>{
    const {loading, error,request} = useHttp()
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
  const us =  data.TagN

    const addCol = async () => {
        try {
            const data = await request('/IsearchOnTag', 'POST', {us})
        } catch (e) {}

    }

    return(<div>{us} </div>)

}
export default AfterSearchTag;