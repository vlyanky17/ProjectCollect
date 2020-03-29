import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import ComTryMap from "./ComTryMap";



export const BiggestCol = () => {
    const {loading, error,request} = useHttp()
    const [lodTr, setlodTr] = useState(false)
    const [col, setcol] = useState({})

    const FB = async () => {
        try {


            const data = await request('/FindBiggest', 'POST')
            setlodTr(true)
            setcol(data)
        } catch (e) {}
    }
    useEffect(() => {

      if (lodTr==false)  {FB()}

        }
    )
    return(<div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th>{col.nam}</th>
        <th>{col.tem}</th>

        </tr>
        </thead>

        <tbody>

        </tbody>

        </table>
        </div>
)
}
export default BiggestCol;