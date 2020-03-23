import React, {useCallback, useContext, useEffect, useState} from 'react'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'

export const ColTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const storageName = 'userData'
    const da = JSON.parse(localStorage.getItem(storageName))
    const us = da.userId
console.log(us)
    const registerAll = async () => {
        try {

            const data = await request('/ToCabCol', 'POST',{us})
            console.log(data.userId)
            setUsers(data)
            console.log(users)
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