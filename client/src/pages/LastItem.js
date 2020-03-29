import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'



export const LastItem = () =>{
    const {loading, error,request} = useHttp()
    const [ThisItm, setThisItm] = useState( {})

    const [OnLoad, setOnLoad] = useState( false)
    const registerAll = async () => {
        try {

            const data = await request('/IfindLast', 'POST')
            setOnLoad(true)


        } catch (e) {}
    }



    useEffect(() => {
            if (OnLoad ==false) {registerAll()
                console.log("usEf")
            }

        }
    )

    return (1111111111111)

}

export default LastItem;