import React, {useCallback, useContext, useEffect, useState} from 'react'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'

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
            console.log(cols)

        } catch (e) {}
    }


    return(
        <div>
        1111111111111111111111
    {us}
        </div>
)

}
export default ColTabl;