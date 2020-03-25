import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";
import {useHttp} from "../hooks/http.hook";


export const ItemMap = ({ itms }) => {
    const {loading, error,request} = useHttp()
    const [lod, setLod] = useState({nam:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId

    const registerAl = async () => {
        try {
            console.log(us)
            const dat = await request('/ColForItm', 'POST',{us})

            setLod(dat[0])
            console.log(dat[0])

        } catch (e) {}
    }
    useEffect(() => {
        if (lod.nam==''){console.log('lod')
            registerAl()}
        console.log(lod)
        console.log("1111111") }
    )
    if (!itms.length) {
        return <p className="center">нет айтемов</p>
    }

    const tp = <div>    <th>название</th></div>;
    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>название</th>
    {tp}


        </tr>
        </thead>




    </table>
)
}

export default ItemMap;