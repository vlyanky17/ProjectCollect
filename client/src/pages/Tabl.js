
import React, {useContext, useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'
import TagsCloud from "./TagsCloud";
import BiggestCol from "./BigggestCol";
import LastItem from "./LastItem";

export const ForAut = () =>{
    const {loading, error,request} = useHttp()


    return(
        <div >

        <div id="column-1">
        <form class="form-2">
        <p className="clearfix">

        Облако тегов:
        </p>
        <TagsCloud />   </form>
    </div>
        <div id="column-2">     <form class="form-2">
        <p className="clearfix">

        самая большая коллекция:
        </p>
     //   <BiggestCol/>
    </form>
        </div>
        <div id="column-3"> <form class="form-2">
        <p className="clearfix">

       последний добавленный айтем:
        </p>
 ///   <LastItem/>
    </form></div>

    </div>
)

}
export default ForAut;