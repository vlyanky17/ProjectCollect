import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'





export const AdmUserTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const [usr, setusr] = useState( {nam:'',disk:'',tem:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId

    const registerAll = async () => {
        try {
console.log(us)
            const dy = await request('/UsGet', 'POST',{us})
            setusr(dy)


        } catch (e) {}
    }

    useEffect(() => {if (usr.nam=''){    registerAll()}

        }
    )


    return( <div>
      <button onClick={registerAll}> 11111 </button>

    </div>
);
}

export default AdmUserTabl;