import React, {useCallback, useContext, useEffect, useState} from 'react'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'
import ItemMapTagSearch from "./ItemMapTagSearch";



export const ColTablSearch = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()

    const [itms, setitms] = useState({nazv:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId
    useEffect(() => {
            if (itms.nazv==''){console.log('itms')
                registerAll()}
        }
    )

    const registerAll = async () => {
        try {

            const data = await request('/ItemUp', 'POST',{us})
            setitms(data)

        } catch (e) {}
    }



    return(<div>
        <nav>
        <div className="nav-wrapper" style={{ padding: '0' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">



        <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>
        <ItemMapTagSearch itms={itms} />
    </div>

);
}

export default ColTablSearch;
