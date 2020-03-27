import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'
import UserMap from "./UserMap";




export const AdmUserTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const [usr, setusr] = useState( {nam:'',disk:'',tem:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId

    const registerAll = async () => {
        try {

            const dy = await request('/UsGet', 'POST',{us})
            setusr(dy)


        } catch (e) {}
    }

    useEffect(() => {if (usr.nam==''){    registerAll()}
console.log(usr)
        }
    )


    return( <div>

<UserMap  />
    </div>
);
}

export default AdmUserTabl;