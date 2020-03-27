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
    const [usrs, setusr] = useState( [])
    const [lod, setlod] = useState( false)
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.userId
    const ResI = data.ResId
    const log = data.logn
    const ResL = data.ResLog

    const registerAll = async () => {
        try {

            const dy = await request('/UsGet', 'POST',{us})
            setusr(dy.users)
            setlod(true)

        } catch (e) {}
    }

    const IsBan = async () => {
        try {

            const dt = await request('/IsBan', 'POST',{us})
if (dt.Ban=='true'){   event.preventDefault()
    auth.logout()
    history.push('/')}

        } catch (e) {}
    }


    useEffect(() =>  { if (lod==false){registerAll()}
        IsBan()
        }
    )


    return( <div>


<UserMap usrs={usrs} />
    </div>
);
}

export default AdmUserTabl;