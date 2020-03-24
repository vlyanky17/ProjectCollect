import React, { useMemo, useEffect, useState } from "react";
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';


export const CreatItem = () =>{
    const {loading, error,request} = useHttp()
    const history = useHistory()
    const [col, setcol] = useState( {nam:'',disk:'',tem:''})

    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId
    const [form, setForm] = useState( {})

    const changeHandler = event => {
        setForm({...form,[event.target.name]: event.target.value})

    }

    const registerAll = async () => {
        try {

            const data = await request('/ColUp', 'POST',{us})

            setcol(data[0])

        } catch (e) {}
    }

    useEffect(() => {
            if (col.nam =='') {registerAll()
                console.log("usEf")
            }

        }
    )

    if (col.intgr1!='') {  var Pintgr1 = col.intgr1
        var intgr1=  <input type="number" id="intgr1" name="intgr1" placeholder={Pintgr1}  onChange={changeHandler} />}

        if (col.intgr2!='') {  var Pintgr2 = col.intgr2
            var intgr2=  <input type="number" id="intgr2" name="intgr2" placeholder={Pintgr2}  onChange={changeHandler} />}

            if (col.intgr3!='') {  var Pintgr3 = col.intgr3
                var intgr3=  <input type="number" id="intgr3" name="intgr3" placeholder={Pintgr3}  onChange={changeHandler} />}

                if (col.Cstr1!='') {  var PCstr1 = col.Cstr1
                    var Cstr1=  <input type="text" id="Cstr1" name="Cstr1" placeholder={PCstr1}  onChange={changeHandler} />}

                    if (col.Cstr2!='') {  var PCstr2 = col.Cstr2
                        var Cstr2=  <input type="text" id="Cstr2" name="Cstr2" placeholder={PCstr2}  onChange={changeHandler} />}

                        if (col.Cstr3!='') {  var PCstr3 = col.Cstr3
                            var Cstr3=  <input type="text" id="Cstr3" name="Cstr3" placeholder={PCstr3}  onChange={changeHandler} />}

                            if (col.Ctxt1!='') {  var PCtxt1 = col.Ctxt1
                                var Ctxt1=  <textarea  id="Ctxt1" name="Ctxt1" placeholder={PCtxt1}  onChange={changeHandler} />}

                                if (col.Cstr2!='') {  var PCstr2 = col.Cstr2
                                    var Cstr2=  <input type="text" id="Cstr2" name="Cstr2" placeholder={PCstr2}  onChange={changeHandler} />}

                                    if (col.Cstr3!='') {  var PCstr3 = col.Cstr3
                                        var Cstr3=  <input type="text" id="Cstr3" name="Cstr3" placeholder={PCstr3}  onChange={changeHandler} />}

    return (
        <div>
        <nav>
        <div className="nav-wrapper" style={{ padding: '0 ' }}>

<ul id="nav-mobile" className="right hide-on-med-and-down">


        <li><a  href="/Cab" >назад</a></li>
    <li><a href="/">Главная </a></li>
    </ul>
    </div>
    </nav>
    <form className="form-2">
        <label htmlFor="nazv"><i className="icon-user"></i>название</label>
    <input type="text" id="nazv" name="nazv" placeholder="название " onChange={changeHandler} />

    <label htmlFor="tegs"><i className="icon-user"></i>теги</label>
    <input type="text" id="tegs" name="tegs" placeholder="теги " onChange={changeHandler} />
    {intgr1}
    {intgr2}
    {intgr3}
                            {Cstr1}
                            {Cstr2}
                            {Cstr3}
        </form>
    </div>

);
}

export default CreatItem;