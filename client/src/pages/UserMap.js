import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'

export const UserMap = ({ usrs }) => {
    if (!usrs.length) {
        return <p className="center">нет коментариев</p>
    }
    const {loading, error,request} = useHttp()
    const changeHandler = event => {

        console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId:  event.target.name, token: data.token,Adm: data.Adm,logn:event.target.id,ResId: data.ResId,ResLog: data.ResLog

        }))

    }

    const BanMachine = async (event) => {
        try {
            console.log(event.target.name)
            const ev =event.target.name
            console.log(ev)
            const dt = await request('/ban', 'POST', {...ev})
        } catch (e) {}
    }

    const Deleter = async (event) => {
        try {
            console.log(event.target.name)
            const ev =event.target.name
            console.log(ev)
            const dt = await request('/delet', 'POST', {...ev})
        } catch (e) {}
    }



    return (
        <div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th>имя</th>
        <th>админ</th>
        <th>заблокирован</th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
        </thead>

        <tbody>
        { usrs.map((usr, index) => {
            if (usr.Admin=="Adm"){ var IAmd = 'true'} else {IAmd = 'false'}
                return (
                    <tr key={usr._id}>
                    <td>{usr.login}</td>
                    <td>{IAmd}</td>
                    <td>{usr.Ban}</td>
                    <td><a  href="/Cab"> <button name={usr._id} id={usr.login}  onClick={changeHandler} > перейти в личный кабинет</button></a> </td>
                <td><a   > <button name={usr._id}  onClick={BanMachine} > заблокировать/разблокироввать </button></a> </td>
                <td><a  > <button name={usr._id}  onClick={Deleter} > Удалить</button></a> </td>
                </tr>
            )
            }) }
        </tbody>

        </table>
        </div>
    )
}

export default UserMap;