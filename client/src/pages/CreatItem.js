import React, { useMemo, useEffect, useState } from "react";
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';


export const CreatItem = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const [form, setForm] = useState( {nam:'',disk:'',tem:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId

    const registerAll = async () => {
        try {

            const data = await request('/ColUp', 'POST',{us})
            console.log(data[0])
            setForm(data[0])
console.log('222222222')
            console.log(data[0].nam)
        } catch (e) {}
    }

    useEffect(() => {
            if (form.nam =='') {registerAll()
                console.log("usEf")
            }

        }
    )
    return (
        <div>
        <nav>
        <div className="nav-wrapper" style={{ padding: '0 ' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">


        <li><a  href="/Cab" >назад</a></li>
    <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>

    </div>

);
}

export default CreatItem;