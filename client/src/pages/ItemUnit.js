import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';


import 'materialize-css'



export const ItemUnit = () => {
    const {loading, error,request} = useHttp()
    const [itm, setitm] = useState({nam:''})
    const [tag, settag] = useState({nam:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ItId

    const registerAl = async () => {
        try {

            const dat = await request('/GetItm', 'POST',{us})

            setitm(dat[0])
            delete dat[0];
            settag(dat)


        } catch (e) {}
    }

    useEffect(() => {
        if (itm.nam==''){
            registerAl()}


       }
    )

    if (itm.intgr1!=undefined) {   var Pintgr1 = itm.intgr1
        var intgr1= <th>{Pintgr1}</th>;
    }
    if (itm.intgr2!=undefined) {   var Pintgr2 = itm.intgr2
        var intgr2= <th>{Pintgr2}</th>;
    }
    if (itm.intgr3!=undefined) {   var Pintgr3 = itm.intgr3
        var intgr3= <th>{Pintgr3}</th>;
    }
    if (itm.Cstr1!=undefined) {   var PCstr1 = itm.Cstr1
        var Cstr1= <th>{PCstr1}</th>;
    }
    if (itm.Cstr2!=undefined) {   var PCstr2 = itm.Cstr2
        var Cstr2= <th>{PCstr2}</th>;
    }
    if (itm.Cstr3!=undefined) {   var PCstr3 = itm.Cstr3
        var Cstr3= <th>{PCstr3}</th>;
    }
    if (itm.Ctxt1!=undefined) {   var PCtxt1 = itm.Ctxt1
        var Ctxt1= <th>{PCtxt1}</th>;
    }
    if (itm.Ctxt2!=undefined) {   var PCtxt2 = itm.Ctxt2
        var Ctxt2= <th>{PCtxt2}</th>;
    }
    if (itm.Ctxt3!=undefined) {   var PCtxt3 = itm.Ctxt3
        var Ctxt3= <th>{PCtxt3}</th>;
    }
    if (itm.Cdate1!=undefined) {   var PCdate1 = itm.Cdate1
        var Cdate1= <th>{PCdate1}</th>;
    }
    if (itm.Cdate2!=undefined) {   var PCdate2 = itm.Cdate2
        var Cdate2= <th>{PCdate2}</th>;
    }
    if (itm.Cdate3!=undefined) {   var PCdate3 = itm.Cdate3
        var Cdate3= <th>{PCdate3}</th>;
    }

    if (itm.Cbol1!=undefined) {   var PCbol1 = itm.Cbol1
        var Cbol1= <th>{PCbol1}</th>;
    }
    if (itm.Cbol2!=undefined) {   var PCbol2 = itm.Cbol2
        var Cbol2= <th>{PCbol2}</th>;
    }
    if (itm.Cbol3!=undefined) {   var PCbol3 = itm.Cbol3
        var Cbol3= <th>{PCbol3}</th>;
    }

    let tgs =""
    for (var i = 1; i < tag.length; i++) {
        const UnitTag=tag[i]

        tgs=tgs+UnitTag.nam
    }
console.log(tgs)
    return( <div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th>{itm.nam}</th>
        <th>{tgs}</th>
    {intgr1}
    {intgr2}
    {intgr3}
    {Cstr1}
    {Cstr2}
    {Cstr3}
    {Ctxt1}
    {Ctxt2}
    {Ctxt3}
    {Cdate1}
    {Cdate2}
    {Cdate3}
    {Cbol1}
    {Cbol2}
    {Cbol3}
        </tr>
        </thead>
        </table>
        </div>
);

}

export default ItemUnit;