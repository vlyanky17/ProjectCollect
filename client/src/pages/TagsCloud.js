import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'



export const TagsCloud = () =>{

        const {loading, error,request} = useHttp()
    const [tag, settag] = useState( null)

    const [OnLoad, setOnLoad] = useState( false)
    const registerAll = async () => {
        try {

            const data = await request('/IloadTags', 'POST')
            setOnLoad(true)
            settag(data.array1)

        } catch (e) {}
    }

    useEffect(() => {
            if (OnLoad ==false) {registerAll()
                console.log("usEf")
            }

        }
    )
    return( <div>

    {tag}
    {
    for (var i = 0; i < tag.length; i++) {   return (<div>111111 </div>)}
    }
        </div>
)
}

export default TagsCloud;
