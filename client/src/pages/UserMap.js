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
            if (usr.Admin=="Adm"){ var IAmd = 'true'} else {IAmd='false'}
                return (
                    <tr key={usr._id}>
                    <td>{usr.login}</td>
                    <td>{IAmd}</td>
                    <td>{usr.Ban}</td>
                </tr>
            )
            }) }
        </tbody>

        </table>
        </div>
    )
}

export default UserMap;