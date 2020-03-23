import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";



import 'materialize-css'


export const PageForCol = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const [form, setForm] = useState( {})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
const us = data.ColId

    const registerAll = async () => {
        try {

            const data = await request('/ColUp', 'POST',{us})
console.log(data)
            setForm(data)

        } catch (e) {}
    }

    useEffect(() => {
        if (form =={}) {registerAll()
            console.log("usEf")
        }

        }
    )
    return( <div>
        <nav>
        <div className="nav-wrapper" style={{ padding: '0 ' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">


        <li><a  href="/Cab" >назад</a></li>
    <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>

        {us}


    </div>
);
}

export default PageForCol;