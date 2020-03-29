import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import ComTryMap from "./ComTryMap";



export const BiggestCol = () => {
    const {loading, error,request} = useHttp()
    const [lodTr, setlodTr] = useState(false)
    const [ThisCol, setcol] = useState({})

    const FB = async () => {
        try {


            const data = await request('/FindBiggest', 'POST')
            setlodTr(true)
            setcol(data.col[0])
            console.log(data.col[0].nam)
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



        </tr>
        </thead>

        <tbody>

        </tbody>

        </table>
        </div>
)
}
export default BiggestCol;