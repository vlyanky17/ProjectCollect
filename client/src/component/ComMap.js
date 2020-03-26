import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";
import {useHttp} from "../hooks/http.hook";


export const ComMap = ({ outcom }) => {
    const {loading, error,request} = useHttp()

    if (!outcom.length) {
        return <p className="center">нет коментариев</p>
    }


    return (<div>1111</div>)
}

export default ComMap;