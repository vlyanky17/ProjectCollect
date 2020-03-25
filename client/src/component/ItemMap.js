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

    const registerAll = async () => {
        try {

            const dat = await request('/ToCabCol', 'POST',{us})
            setLod(dat)


        } catch (e) {}
    }
    useEffect(() => {
            if (lod==null) {
                registerAll()
            }
            console.log(lod)
        }
    )
    if (!itms.length) {
        return <p className="center">нет айтемов</p>
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