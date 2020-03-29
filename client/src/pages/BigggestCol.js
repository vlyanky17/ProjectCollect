import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import ComTryMap from "./ComTryMap";



export const BiggestCol = () => {
    const {loading, error,request} = useHttp()
    const [lodTr, setlodTr] = useState(false)

    const FB = async () => {
        try {


            const data = await request('/FindBiggest', 'POST')
            setlodTr(true)
        } catch (e) {}
    }
    useEffect(() => {

      if (lodTr==false)  {FB()}

        }
    )
    return(<div>
        1111111111111
        </div>
)
}
export default BiggestCol;