import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'



export const LastItem = () =>{
    const {loading, error,request} = useHttp()
    const [ThisItm, setThisItm] = useState( {})

    const [OnLoad, setOnLoad] = useState( false)
    const registerAll = async () => {
        try {


            setOnLoad(true)





        } catch (e) {}
    }

    const changeHandler = event => {
        console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.userId, token: data.token,Adm: data.Adm,logn:data.logn,ItId: event.target.name,ResId: data.ResId,ResLog:data.ResLog

        }))

    }

    useEffect(() => {
            if (OnLoad ==false) {registerAll()
                console.log("usEf")
            }

        }
    )
alert(ThisItm)
    return (<div>

        <table class="resp-tab">
        <thead>
        <tr>
        <th> {ThisItm.nazv}</th>
        </tr>
        </thead>
        </table>
        <table class="resp-tab">
        <tbody>
        <tr >
        <td><a  href="/ItemUnitSearchTag"name={ThisItm._id} onClick={changeHandler}> открыть</a> </td>
    </tr>
    </tbody>

    </table>
    </div>

)

}

export default LastItem;