import React, {useCallback, useContext, useEffect, useState} from 'react'

export const UserMap = ({ usrs }) => {
    if (!usrs.length) {
        return <p className="center">нет коментариев</p>
    }

    const changeHandler = event => {
        console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId:  event.target.name, token: data.token,Adm: data.Adm,logn:event.target.id,ResId: data.ResId,ResLog: data.ResLog

        }))

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
            if (usr.Admin=="Adm"){ var IAmd = 'true'} else {IAmd = 'false'}
                return (
                    <tr key={usr._id}>
                    <td>{usr.login}</td>
                    <td>{IAmd}</td>
                    <td>{usr.Ban}</td>
                    <td><a  href="/Cab"> <button name={usr._id} id={usr.login}  onClick={changeHandler} > открыть</button></a> </td>
                </tr>
            )
            }) }
        </tbody>

        </table>
        </div>
    )
}

export default UserMap;