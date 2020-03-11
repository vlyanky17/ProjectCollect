
import React, {useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";


export const ForReg = () =>{
    const {loading, error,request} = useHttp()
    const [form, setForm] = useState( {login:'', password:''})


    const arr =2 ;
    return arr

}
export default ForReg;