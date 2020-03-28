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
    const changeHandler = event => {
        console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.ResId, token: data.token,Adm: data.Adm,logn:data.ResLog,ResId: data.ResId,ResLog: data.ResLog,TagN:event.target.name

        }))



    }

    return (  <div>
        { tags.map((tag, index) => {
                return (<div>
                    <a  href="/AfterSearchTag" onClick={changeHandler}  name={tag}> {tag}</a>
                    </div>
            )
            }) }
        </div>)
}

export default TagMap;