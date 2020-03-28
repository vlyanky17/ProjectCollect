
import React, {useContext, useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import TagsCloud from "./TagsCloud";

export const ForAut = () =>{
    const {loading, error,request} = useHttp()


    return(
        <div class="column">
        <p><div><TagsCloud /> 111111111111111<div></p>
    <p>22222222222222222</p>
        <p>333333333333</p>
    </div>
)

}
export default ForAut;