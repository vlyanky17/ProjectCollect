import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import ComTryMap from "./ComTryMap";



export const ToComentSearchTag = () => {
    const {loading, error,request} = useHttp()
    const [com, setcom] = useState({nam:'',comen:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.logn
    const  d =data.ItId

    const ToComent = async () => {
        try {


            const data = await request('/InCom', 'POST', {com})

        } catch (e) {}
    }


    const changeHandler = event => {
        setcom({[event.target.name]: event.target.value,'nam':us,id:d})

        console.log(com)
    }
    return (<form class="form-2"> комментарии   <input type="text" id="comen" name="comen" placeholder="комментарий " onChange={changeHandler} />
    <button onClick={ToComent}>  отправить</button>  </form>)
}


export default ToComentSearchTag;