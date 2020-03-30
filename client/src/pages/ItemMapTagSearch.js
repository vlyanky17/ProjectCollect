import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";
import {useHttp} from "../hooks/http.hook";


export const ItemMapTagSearch = ({ itms }) => {
    const {loading, error,request} = useHttp()
    const [lod, setLod] = useState({nam:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId

    const changeHandler = event => {
        console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.userId, token: data.token,Adm: data.Adm,logn:data.logn,ColId: data.ColId,ItId: event.target.name,ResId: data.ResId,ResLog:data.ResLog

        }))

    }



    if (!itms.length) {
        return <p className="center">нет айтемов</p>
    }



console.log(itms)
    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>название</th>

        </tr>
        </thead>
        <tbody>

        </tbody>



        </table>
)
}

export default ItemMapTagSearch;