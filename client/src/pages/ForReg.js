
import React, {useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";


export const ForReg = () =>{
    const {loading, error,request} = useHttp()
    const [form, setForm] = useState( {login:'', password:''})


}
export default ForReg;