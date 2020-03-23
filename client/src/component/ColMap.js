import React from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";



export const ColMap = ({ cols }) => {
    if (!cols.length) {
        return <p className="center">нет коллекций</p>
    }

    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>имя</th>
        <th>описание</th>
        <th>тема</th>


    </tr>
    </thead>

    <tbody>
    { cols.map((col, index) => {
            return (

                <tr key={col._id}>


                <td>{col.nam}</td>
                <td>{col.disk}</td>
                <td>{col.tem}</td>
                <td><button> открыть</button></td>
                </tr>
        )
        }) }

    </tbody>

    </table>

)
}

export default ColMap;