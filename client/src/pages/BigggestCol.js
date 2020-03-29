import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import ComTryMap from "./ComTryMap";



export const BiggestCol = () => {
    const {loading, error,request} = useHttp()
    const [lodTr, setlodTr] = useState(false)
    const [ThisCol, setcol] = useState({})

    const changeHandler = event => {
        console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.userId, token: data.token,Adm: data.Adm,logn:data.logn,ColId: event.target.name,ResId: data.ResId,ResLog:data.ResLog

        }))

    }

    const FB = async () => {
        try {


            const data = await request('/FindBiggest', 'POST')
            setlodTr(true)
            setcol(data.col[0])
            console.log(data.col[0].nam)
        } catch (e) {}
    }
    useEffect(() => {

      if (lodTr==false)  {FB()}

        }
    )
    return(<div>
        <table class="resp-tab">
        <thead>
        <tr>
        <th> >{ThisCol.nam}</th>
        <th> {ThisCol.tem} </th>


        </tr>
        </thead>
    </table>
    <table class="resp-tab">
        <tbody>
        <tr >
        <td><a  href="/Reg"> <button name={ThisCol._id} onClick={changeHandler} > открыть</button></a> </td>
        </tr>
        </tbody>

        </table>
        </div>
)
}
export default BiggestCol;