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
    const IgetTegs = event => {
        var arrayOfStrings = event.target.value.split("#");
        setForm({...form,[event.target.name]: arrayOfStrings})



    }


    const registerAll = async () => {
        try {

            const data = await request('/ColUp', 'POST',{us})

            setcol(data[0])
            setForm({...form,["id"]:data[0]._id})
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

                                if (col.Ctxt2!='') {  var PCtxt2 = col.Ctxt2
                                    var Ctxt2=  <textarea  id="Ctxt2" name="Ctxt2" placeholder={PCtxt2}  onChange={changeHandler} />}

                                    if (col.Ctxt3!='') {  var PCtxt3 = col.Ctxt3
                                        var Ctxt3=  <textarea  id="Ctxt3" name="Ctxt3" placeholder={PCtxt3}  onChange={changeHandler} />}

                                        if (col.Cdate1!='') {  var PCdate1 = col.Cdate1
                                            var Cdate1=  <input   type="date" id="Cdate1" name="Cdate1" placeholder={PCdate1}  onChange={changeHandler} />}

                                            if (col.Cdate2!='') {  var PCdate2 = col.Cdate2
                                                var Cdate2=  <input   type="date" id="Cdate2" name="Cdate2" placeholder={PCdate2}  onChange={changeHandler} />}

                                                if (col.Cdate3!='') {  var PCdate3 = col.Cdate3
                                                    var Cdate3=  <input  type="date"  id="Cdate3" name="Cdate3" placeholder={PCdate3}  onChange={changeHandler} />}

                                                    if (col.Cbol1!='') {  var PCbol1 = col.Cbol1
                                                        var Cbol1=  <input   type="checkbox" id="Cbol1" name="Cbol1" placeholder={PCbol1}  onChange={changeHandler} />}

                                                        if (col.Cbol2!='') {  var PCbol2 = col.Cbol2
                                                            var Cbol2=  <input   type="date" id="Cbol2" name="Cbol2" placeholder={PCbol2}  onChange={changeHandler} />}

                                                            if (col.Cbol3!='') {  var PCbol3 = col.Cbol3
                                                                var Cbol3=  <input  type="date"  id="Cbol3" name="Cbol3" placeholder={PCbol3}  onChange={changeHandler} />}


                                                                const addItm = async () => {
                                                                    try {

                                                                        const data = await request('/ToItm', 'POST', {...form})

                                                                    } catch (e) {}
                                                                }
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

    <label htmlFor="tags"><i className="icon-user"></i>теги</label>
    <input type="text" id="tags" name="tags" placeholder="пример(#FirstTag#secondTeg)" onChange={IgetTegs} />
    {intgr1}
    {intgr2}
    {intgr3}
                            {Cstr1}
                            {Cstr2}
                            {Cstr3}
                                        {Ctxt1}
                                        {Ctxt2}
                                        {Ctxt3}
                                                            <p className="clearfix">
                                                                {PCdate1}
                                                                {Cdate1}
                                                            </p>
                                                                <p className="clearfix">
                                                                {PCdate2}
                                                                {Cdate2}
                                                            </p>
                                                                <p className="clearfix">
                                                                {PCdate3}
                                                                {Cdate3}
                                                            </p>
                                                                {PCbol1}
                                                                {Cbol1}
                                                                {PCbol2}
                                                                {Cbol2}
                                                                {PCbol3}
                                                                {Cbol3}
                                                            <p className="clearfix">
                                                            <input type="submit" name="submit" value="добавить" onClick={addItm} />

                                                                <input type="text" value="добавить" onChange={addItm} />
                                                                </p>
        </form>
    </div>

);
}

export default CreatItem;