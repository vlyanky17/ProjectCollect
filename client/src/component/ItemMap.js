import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";
import {useHttp} from "../hooks/http.hook";


export const ItemMap = ({ itms }) => {
    const {loading, error,request} = useHttp()
    const [lod, setLod] = useState(null)
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId
    if (!itms.length) {
        return <p className="center">нет айтемов</p>
    }
    useEffect(() => {
       if (lod ==null){

       }
        }
    )
    const registerAll = async () => {
        try {
            console.log(us)
            const data = await request('/ToCabCol', 'POST',{us})
            setitms(data)
            console.log(data)
        } catch (e) {}
    }


    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>название</th>
        <th>теги</th>


        </tr>
        </thead>




    </table>
)
}

export default ItemMap;