import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'


export const TagMap = ({ tags }) =>{

    if (!tags.length) {
        return <p className="center">нет тегов</p>
    }


    return (  <div>
        { tags.map((usr, index) => {

            return (
                <tr key={usr._id}>
                <td> {usr.login}</td>
                <td>  {IAmd}</td>
                <td> {usr.Ban}</td>
                <td><a  href="/Cab">    <form class="form-2"><button name={usr._id} id={usr.login}  onClick={changeHandler} >кабинет</button></form></a> </td>
            <td><a   >     <form class="form-2"><button name={usr._id}  onClick={BanMachine} > заблокировать/разблокироввать </button>  </form></a> </td>
            <td><a  >     <form class="form-2"><button name={usr._id}  onClick={Deleter} > Удалить</button>  </form> </a> </td>
            </tr>
        )
        }) }
        </div>)
}

export default TagMap;