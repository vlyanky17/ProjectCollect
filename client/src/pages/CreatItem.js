import React, { useMemo, useEffect, useState } from "react";
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';


export const CreatItem = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const [col, setcol] = useState( {nam:'',disk:'',tem:''})

    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId
    const [form, setForm] = useState( {})

    const changeHandler = event => {
        setForm({...form,[event.target.name]: event.target.value})

    }

    const registerAll = async () => {
        try {

            const data = await request('/ColUp', 'POST',{us})

            setcol(data[0])

        } catch (e) {}
    }

    useEffect(() => {
            if (col.nam =='') {registerAll()
                console.log("usEf")
            }

        }
    )

    if (col.intgr1=='') {var intgr1="11111"}
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
    <form className="form-2">
        <label htmlFor="nazv"><i className="icon-user"></i>название</label>
    <input type="text" id="nazv" name="nazv" placeholder="название " onChange={changeHandler} />

    <label htmlFor="tegs"><i className="icon-user"></i>теги</label>
    <input type="text" id="tegs" name="tegs" placeholder="теги " onChange={changeHandler} />

        </form>
    </div>

);
}

export default CreatItem;