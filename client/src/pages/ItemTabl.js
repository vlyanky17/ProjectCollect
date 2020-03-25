import React, {useCallback, useContext, useEffect, useState} from 'react'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import {NavLink, useHistory} from 'react-router-dom'
import ItemMap from "../component/ItemMap";



export const ItemTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()

    const [itms, setitms] = useState([])
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId
    useEffect(() => {
        if (itms==[]){console.log('itms')
            registerAll()}
        console.log(itms)
        console.log("1111111") }
    )

    const registerAll = async () => {
        try {
console.log(us)
            console.log("222222222222222")
            const data = await request('/ItemUp', 'POST',{us})
            setitms(data)

        } catch (e) {}
    }



    return(<div>
        <ItemMap itms={itms} />
        </div>

    );
}

export default ItemTabl;
