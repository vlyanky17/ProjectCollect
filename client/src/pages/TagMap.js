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
                if (usr.Admin=="Adm"){ var IAmd = 'true'} else {IAmd = 'false'}
                return (
                    <tr key={usr._id}>
                    <td> {usr.login}</td>

                    <td> {usr.Ban}</td>

                </tr>
            )
            }) }
        </div>)
}

export default TagMap;