import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import ComTryMap from "./ComTryMap";
import logo from './lk.png';
import ToComentSearchTag from "./ToComentSearchTag";


export const LikesComentSearchTag = () => {

    const {loading, error,request} = useHttp()
    const [com, setcom] = useState({nam:'',comen:''})
    const [outcom, setoutcom] = useState([])
    const [lkin, setlkin] = useState({nam:''})
    const [LikeCount, setLikeCount] = useState(0)
    const [lodTr, setlodTr] = useState(false)
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.logn
    const  d =data.ItId
    const UserAut= data.userId
    const changeHandler = event => {
        setcom({[event.target.name]: event.target.value,'nam':us,id:d})

        console.log(com)
    }
    const ToLike = async () => {
        try {

            alert(lkin)
            const data = await request('/InLike', 'POST', {lkin})

        } catch (e) {}
    }




    const GetAll = async () => {
        try {

            const datC = await request('/OutCom', 'POST',{d})

            setoutcom(datC)
            const datL = await request('/OutLike', 'POST',{d})
            setLikeCount(datL)
            setlodTr(true)
            setlkin({nam:us,id: d})
        } catch (e) {}
    }
    useEffect(() => {

         if (lodTr==false)  {GetAll()}

        }
    )

if (UserAut != undefined) {var cm = <ToComentSearchTag />}
    return(<div>

        <table class="resp-tab">
        <thead>
        <tr>

        <th> {cm} </th>
    <th> <form class="form-2"> <button  onClick={ToLike}><img src={logo} alt="logo" /> </button>{LikeCount} </form> </th>
    </tr>
    </thead>
    <tbody>

    </tbody>

    </table>

    <ComTryMap  outcom={outcom} />
    </div>
)
}

export default LikesComentSearchTag;