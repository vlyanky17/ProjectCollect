import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'



export const AfterSearchTag = () =>{
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
  const us =  data.TagN
    return({us})

}
export default AfterSearchTag;