import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";



export const LikesComent = () => {

    const {loading, error,request} = useHttp()
    const [com, setcom] = useState({nam:'',comen:''})
    const [outcom, setoutcom] = useState(null)
    const [lodTr, setlodTr] = useState(false)
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.logn
const  d =data.ItId
    const changeHandler = event => {
        setcom({[event.target.name]: event.target.value,'nam':us,id:d})

    console.log(com)
    }

    const ToComent = async () => {
        try {

console.log(com)
            const data = await request('/InCom', 'POST', {com})

        } catch (e) {}
    }

    const GetAll = async () => {
        try {
console.log(d)
            const datC = await request('/OutCom', 'POST',{d})

            setoutcom(datC)
            console.log(datC)

            setlodTr(true)
        } catch (e) {}
    }
    useEffect(() => {
        if (lodTr==false){console.log('lod')
            GetAll()}

        }
    )


    return(<div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th> <form class="form-2"> комментарии   <input type="text" id="comen" name="comen" placeholder="комментарий " onChange={changeHandler} />
    <button onClick={ToComent}>  отправить</button>  </form> </th>
        <th>лайки</th>
        </tr>
        </thead>



        </table>


        </div>
)
}

export default LikesComent;