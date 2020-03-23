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
    const [cols, setCols] = useState([])
    const storageName = 'userData'
    const da = JSON.parse(localStorage.getItem(storageName))
    const us = da.userId
    useEffect(() => {
            registerAll()
        }
    )


    const registerAll = async () => {
        try {

            const data = await request('/ToCabCol', 'POST',{us})
            setCols(data)


        } catch (e) {}
    }


    return(
        <div>

  <ColMap cols={cols} />
        </div>
)

}
export default ColTabl;