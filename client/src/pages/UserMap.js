import React, {useCallback, useContext, useEffect, useState} from 'react'

export const UserMap = ({ usrs }) => {
    if (!usrs.length) {
        return <p className="center">нет коментариев</p>
    }

    return (
        <div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th>имя</th>
        <th>админ</th>
        <th>заблокирован</th>
        </tr>
        </thead>

        <tbody>
        { usrs.map((usr, index) => {
                return (
                    <tr key={usr._id}>
                    <td>{usr.login}</td>
                    <td>{usr.Admin}</td>
                </tr>
            )
            }) }
        </tbody>

        </table>
        </div>
    )
}

export default UserMap;