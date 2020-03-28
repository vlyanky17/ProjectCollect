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
       alert(event.target.name)


    }

    return (  <div>
        { tags.map((tag, index) => {
                return (<div>
                    <a onClick={changeHandler}  name={tag}> {tag}</a>
                    </div>
            )
            }) }
        </div>)
}

export default TagMap;