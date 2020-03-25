import React from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";


export const ItemMap = ({ itms }) => {

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