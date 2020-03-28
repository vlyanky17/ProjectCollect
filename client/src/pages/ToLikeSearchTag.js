import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import ComTryMap from "./ComTryMap";
import logo from './lk.png';


export const ToLikeSearchTag = () => {
    const {loading, error,request} = useHttp()
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.logn
    const  d =data.ItId
    const [lkin, setlkin] = useState({nam:us,id: d})
    const ToLike = async () => {
        try {


            const data = await request('/InLike', 'POST', {lkin})

        } catch (e) {}
    }


    return (<form class="form-2"> <button  onClick={ToLike}><img src={logo} alt="logo" /> </button>{LikeCount} </form> )
}

export default ToLikeSearchTag;