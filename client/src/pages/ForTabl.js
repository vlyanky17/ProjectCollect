import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import UserTabl from "../component/UserTabl";
import { Checkbox } from 'react-input-checkbox';


export const ForTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [users, setUsers] = useState([])




    const registerAll = async () => {
        try {
            const data = await request('/api/auth/allLog', 'POST')
            console.log(data.userId)
            setUsers(data)
            console.log(users)
        } catch (e) {}
    }
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    const [form, setForm] = useState( {login:'', id:''})
    const aray = [];






    const changeHandler = async (event) => {

        const { target } = event;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const login = target.type === 'checkbox' ? target.name : target.name;
        const  fin = aray.findIndex(element => element.login === login)
        console.log(fin)
        if (fin !=-1){   aray.splice(fin, 1)}

        const element = { login: login, val: value };
        aray.push(element)

        console.log(aray)

    }



    const banMachine = async () => {
        try {

            const data = await request('/api/auth/ban', 'POST', {...aray})

        } catch (e) {}
    }

    const antibanMachine = async () => {
        try {

            const data = await request('/api/auth/antiban', 'POST', {...aray})

        } catch (e) {}
    }
    const delet = async () => {
        try {

            const data = await request('/api/auth/delet', 'POST', {...aray})

        } catch (e) {}
    }


    return(
)
}

export default ForTabl;