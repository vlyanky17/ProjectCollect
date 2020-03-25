import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';


import 'materialize-css'



export const ItemUnit = () => {
    const {loading, error,request} = useHttp()
    const [itm, setitm] = useState({nam:''})
    const [tag, settag] = useState({nam:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ItId

    const registerAl = async () => {
        try {

            const dat = await request('/GetItm', 'POST',{us})

            setitm(dat[0])
            delete dat[0];
            settag(dat)


        } catch (e) {}
    }

    useEffect(() => {
        if (itm.nam==''){console.log('lod')
            registerAl()}
        console.log(itm)
        console.log(tag)
       }
    )

    return( <div>
        {us}
        111111111111
        </div>
);

}

export default ItemUnit;