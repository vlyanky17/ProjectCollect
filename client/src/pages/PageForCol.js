import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";



import 'materialize-css'


export const PageForCol = () =>{
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const ut = data.logn
    return( <div>
        {ut}  1111111112222221111
    </div>
);
}

export default PageForCol;