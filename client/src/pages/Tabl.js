
import React, {useContext, useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import TagsCloud from "./TagsCloud";
import BiggestCol from "./BigggestCol";

export const ForAut = () =>{
    const {loading, error,request} = useHttp()


    return(
        <div >

        <div id="column-1">

        <p className="clearfix">

        Облако тегов:
        </p>
        <TagsCloud /></div>
        <div id="column-2"><BiggestCol/></div>
        <div id="column-3">333333333</div>

    </div>
)

}
export default ForAut;