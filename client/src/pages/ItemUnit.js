import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';


import 'materialize-css'



export const ItemUnit = () => {
    const {loading, error,request} = useHttp()
    const [itm, setitm] = useState({nam:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ItId

    const registerAl = async () => {
        try {
            console.log(us)
            const dat = await request('/GetItm', 'POST',{us})

            setitm(dat[0])
            console.log(dat[0])

        } catch (e) {}
    }

    useEffect(() => {
        if (itm.nam==''){console.log('lod')
            registerAl()}
        console.log(itm)
        console.log("1111111") }
    )

    return( <div>
        {us}
        111111111111
        </div>
);

}

export default ItemUnit;