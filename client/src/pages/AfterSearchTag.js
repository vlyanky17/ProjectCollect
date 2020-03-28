import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'
import ItemMapTagSearch from "./ItemMapTagSearch";



export const AfterSearchTag = () =>{
    const {loading, error,request} = useHttp()
    const [itms, setitms] = useState( {})
    const [OnLoad, setOnLoad] = useState( false)



    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))

    console.log(data)
    const addCol = async () => {
        try {
            const data = await request('/IsearchOnTag', 'POST')
            setitms(data.array1)
            setOnLoad(true)
        } catch (e) {}

    }


    return(<div> 1111111111111111</div>)

}
export default AfterSearchTag;