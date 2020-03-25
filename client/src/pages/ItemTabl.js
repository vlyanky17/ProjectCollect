import React, {useCallback, useContext, useEffect, useState} from 'react'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'
import ItemMap from "../component/ItemMap";



export const ItemTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()

    const [itms, setitms] = useState(null)
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId

    useEffect(() => {
        if (itms==null){  registerAll()}
console.log(itms)
        }
    )

    const registerAll = async () => {
        try {
            console.log(us)
            const data = await request('/ItemUp', 'POST',{us})
            setitms(data)
            console.log(data)
        } catch (e) {}
    }



    return(<div>
        <ItemMap itms={itms} />
        </div>

    );
}

export default ItemTabl;
