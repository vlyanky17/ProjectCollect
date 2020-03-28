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
    {  if (tag !=null){console.log('1111111111111') } }
        </div>
)
}

export default TagsCloud;
