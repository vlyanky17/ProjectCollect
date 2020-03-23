import React from 'react'
import './Aut.css';

export const ColMap = ({ cols }) => {
    if (!cols.length) {
        return <p className="center">нет коллекций</p>
    }

    return (
        <table>
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
                </tr>
        )
        }) }

    </tbody>

    </table>

)
}

export default ColMap;