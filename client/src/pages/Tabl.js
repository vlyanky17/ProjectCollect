
import React, {useContext, useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'


export const ForAut = () =>{
    const {loading, error,request} = useHttp()


    return(
        <div class="column">
        <p>1111111111</p>
    <p>22222222222222222</p>
    </div>
)

}
export default ForAut;