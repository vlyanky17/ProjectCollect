import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ForReg from "../pages/ForReg";



export const UserTabl = ({ users,changeHandler} ) => {

    const [form, setForm] = useState( {Id:''})





    if (!users.length) {
        return <p className="center">Нет пользователей</p>
    }
    return (
        <table>
        <thead>
        <tr>
        <th>ch</th>
        <th>Id</th>
    <th>login</th>
    <th>email</th>
    <th>дата регистрации</th>
    <th>дата логина</th>
    <th>статус</th>

    </tr>
    </thead>

    <tbody>
    { users.map((user, index) => {
            return (

                <tr key={user._id}>
              <td>
                <label class="container">
                <input type="checkbox" name={user.login}  onChange={changeHandler}  />
                <span class="checkmark"> </span>
                </label>
                </td>
                <td>{user._id}</td>
                <td>{user.login}</td>
                <td>{user.email}</td>
                <td>{user.datReg}</td>
                <td>{user.datLog}</td>
                <td>{user.stat}</td>
            </tr>
        )
        }) }

    </tbody>

    </table>

)
}
export default UserTabl;
