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
            console.log(us)
            const dat = await request('/ToCabCol', 'POST',{us})
            console.log(dat)
            setLod(dat)
            console.log(dat)

        } catch (e) {}
    }
    useEffect(() => {
            if (lod==null) {
                registerAll()
            }

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