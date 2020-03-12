import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import UserTabl from "../component/UserTabl";





export const ForTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [users, setUsers] = useState([])




    const registerAll = async () => {
        try {
            const data = await request('/allLog', 'POST')
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

    useEffect(() => {
        registerAll()
    }, [registerAll])

    const banMachine = async () => {
        try {

            const data = await request('/ban', 'POST', {...aray})

        } catch (e) {}
    }

    const antibanMachine = async () => {
        try {

            const data = await request('/antiban', 'POST', {...aray})

        } catch (e) {}
    }
    const delet = async () => {
        try {

            const data = await request('/delet', 'POST', {...aray})

        } catch (e) {}
    }


    return(<div>

        <nav>
        <div className="nav-wrapper" style={{ padding: '0 2rem' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a onClick={delet}>Удалить</a></li>

    <li><a onClick={antibanMachine}>Разблокировать</a></li>

    <li><a onClick={banMachine}>Заблокировать</a></li>

    <li><a onClick={registerAll}>Обновить/загрузить таблицу</a></li>

    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
    </ul>
    </div>
    </nav>
    <form>
    < UserTabl users={users}  changeHandler={changeHandler} />
    </form>


    </div>
);




}

export default ForTabl;