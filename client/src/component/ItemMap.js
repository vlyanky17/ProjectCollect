import React from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";


export const ItemMap = ({ itms }) => {
    const sortBy = require('lodash/sortBy');
    if (!itms.length) {
        return <p className="center">нет коллекций</p>
    }
    const changeHandler = event => {
        console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.userId, token: data.token,Adm: data.Adm,logn:data.logn,ColId: data.ColId

        }))

    }



    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>Название</th>
        <th>теги</th>

        <th> </th>

        </tr>
        </thead>


    </table>

)
}

export default ItemMap;