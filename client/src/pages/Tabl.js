
import React, {useContext, useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import TagsCloud from "./TagsCloud";

export const ForAut = () =>{
    const {loading, error,request} = useHttp()


    return(
        <div >

        <div id="column-1"><TagsCloud /></div>
        <div id="column-2">2222222222</div>
        <div id="column-3">333333333</div>

    </div>
)

}
export default ForAut;