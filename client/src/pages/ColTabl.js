import React, {useCallback, useContext, useEffect, useState} from 'react'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'
import ColMap from "../component/ColMap";

export const ColTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [colecs, setcolecs] = useState([])

    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.id
    const registerAll = async () => {
        try {
            const data = await request('/ToCabCol', 'POST',{us})
            setcolecs(data)
            console.log(colecs)
        } catch (e) {}
    }

    return(
        <div>
        1111111111111111111111
        </div>
)

}
export default ColTabl;