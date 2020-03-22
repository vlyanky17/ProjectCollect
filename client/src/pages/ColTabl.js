import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import UserTabl from "../component/UserTabl";
import { Checkbox } from 'react-input-checkbox';




export const ColTabl = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.id



    const registerAll = async () => {
        try {
            const data = await request('/ToCabCol', 'POST', {us})

        } catch (e) {}
    }






    return(<div>

111111111111111
    <form>
 //   < UserTabl users={users}   />
    </form>


    </div>
);
}

export default ColTabl;