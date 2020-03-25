import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";



export const LikesComent = () => {

    const {loading, error,request} = useHttp()
    const [com, setcom] = useState({nam:'',comen:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.logn

    const changeHandler = event => {
        setcom({...com,[event.target.name]: event.target.value})
    console.log(com)
    }

    const ToComent = async () => {
        try {
            setcom({com,'nam':us})
console.log(com)
            const data = await request('/InCom', 'POST', {com})

        } catch (e) {}
    }

    return(<div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th> <form class="form-2"> комментарии   <input type="text" id="comen" name="comen" placeholder="комментарий " onChange={changeHandler} />
    <button onClick={ToComent}>  отправить</button>  </form> </th>
        <th>лайки</th>
        </tr>
        </thead>
        <tbody>



        </tbody>



        </table>


        </div>
)
}

export default LikesComent;