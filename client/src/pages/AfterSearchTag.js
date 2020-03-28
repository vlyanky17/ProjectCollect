import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'
import ItemMapTagSearch from "./ItemMapTagSearch";



export const AfterSearchTag = () =>{
    const {loading, error,request} = useHttp()
    const [itms, setitms] = useState( {})
    const [OnLoad, setOnLoad] = useState( false)



    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
  const us =  data.TagN
    console.log(us)
    const addCol = async () => {
        try {
            const data = await request('/IsearchOnTag', 'POST', {us})
            setitms(data.array1)
            setOnLoad(true)
        } catch (e) {}

    }

    useEffect(() => {
            if (OnLoad ==false) {addCol()
                console.log("usEf")
            }

        }
    )

    return(<div>  <nav>
        <div className="nav-wrapper" style={{ padding: '0' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>
    <ItemMapTagSearch itms={itms} /> </div>)

}
export default AfterSearchTag;