import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';


import 'materialize-css'


export const PageForCol = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const [form, setForm] = useState( {nam:'',disk:'',tem:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
const us = data.ColId

    const registerAll = async () => {
        try {

            const data = await request('/ColUp', 'POST',{us})
console.log(data[0])
            setForm(data[0])

        } catch (e) {}
    }

    useEffect(() => {
        if (form.nam =='') {registerAll()
            console.log("usEf")
        }

        }
    )
    const  ra = null
    if (form.pict !=""){ ra =   "<img src={'data:image/jpeg;base64,' + form.pict} />"}

    

    return( <div>
        <nav>
        <div className="nav-wrapper" style={{ padding: '0 ' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">


        <li><a  href="/Cab" >назад</a></li>
    <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>

    <table class="resp-tab">
        <thead>
        <tr>

        <th>имя</th>
        <th>описание</th>
        <th>тема</th>
        <th> картинка</th>

        </tr>
        </thead>
        <tbody>
        <td>{form.nam}</td>
        <td>{form.disk}</td>
        <td>{form.tem}</td>

        </tbody>
    </table>

        <div  >
1111111
        </div>
    </div>
);
}

export default PageForCol;