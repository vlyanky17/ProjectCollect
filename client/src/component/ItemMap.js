import React from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";


export const ItemMap = ({ itms }) => {
    const sortBy = require('lodash/sortBy');
    if (!itms.length) {
        return <p className="center">нет коллекций</p>
    }




    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>Название</th>
        <th>теги</th>

      

        </tr>
        </thead>


    </table>

)
}

export default ItemMap;