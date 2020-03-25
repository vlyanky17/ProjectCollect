import React, {useCallback, useContext, useEffect, useState} from 'react'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'


export const ItemTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const [form, setForm] = useState( {nazv:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId

    const registerAll = async () => {
        try {

            const data = await request('/ItemUp', 'POST',{us})
console.log(data)
            setForm(data)

        } catch (e) {}
    }



    return(<div>
        1111111111111
        <button onClick={registerAll}> ryjgrf </button>
        </div>

    );
}

export default ItemTabl;
