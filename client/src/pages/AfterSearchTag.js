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
console.log(itms)
    return(<div>   <ItemMapTagSearch itms={itms} /> </div>)

}
export default AfterSearchTag;