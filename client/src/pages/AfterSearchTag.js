import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'



export const AfterSearchTag = () =>{
    const {loading, error,request} = useHttp()
    const [tags, settag] = useState( {})
    const [OnLoad, setOnLoad] = useState( false)



    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
  const us =  data.TagN

    const addCol = async () => {
        try {
            const data = await request('/IsearchOnTag', 'POST', {us})
            settag(data.array1)
            setOnLoad(true)
        } catch (e) {}

    }

    useEffect(() => {
            if (OnLoad ==false) {addCol()
                console.log("usEf")
            }

        }
    )
console.log(tags)
    return(<div>{us} </div>)

}
export default AfterSearchTag;