import React from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";



export const ColMap = ({ cols }) => {
    const sortBy = require('lodash/sortBy');
    if (!cols.length) {
        return <p className="center">нет коллекций</p>
    }
    const changeHandler = event => {
     console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.userId, token: data.token,Adm: data.Adm,logn:data.logn,ColId: event.target.name,ResId: data.ResId,ResLog:data.ResLog

        }))

    }



    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>имя</th>
        <th>описание</th>
        <th>тема</th>
        <th> </th>

    </tr>
    </thead>

    <tbody>
    {

        sortBy(cols, c => c.nam).map((col, index) => {

            return (

                <tr key={col.nam}>


                <td>{col.nam}</td>
                <td>{col.disk}</td>
                <td>{col.tem}</td>
                <td><a  href="/PageForCol"> <button name={col._id} onClick={changeHandler} > открыть</button></a> </td>
                </tr>
        )
        }) }

    </tbody>

    </table>

)
}

export default ColMap;