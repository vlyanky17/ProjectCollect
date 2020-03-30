import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";
import {useHttp} from "../hooks/http.hook";


export const ItemMapTagSearch = ({ itms }) => {
    const {loading, error,request} = useHttp()
    const [lod, setLod] = useState({nam:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId
    const UserAut= data.userId
    const UserAdmt= data.Adm


    const Deleter = async (event) => {
        try {
            console.log(event.target.name)
            const ev =event.target.name
            console.log(ev)
            const dt = await request('/WegoDel', 'POST', {ev})
        } catch (e) {}
    }

    const changeHandler = event => {
        console.log(event.target.name)
        const storageName = 'userData'
        const data = JSON.parse(localStorage.getItem(storageName))
        localStorage.setItem(storageName, JSON.stringify({
            userId: data.userId, token: data.token,Adm: data.Adm,logn:data.logn,ColId: data.ColId,ItId: event.target.name,ResId: data.ResId,ResLog:data.ResLog

        }))

    }



    if (!itms.length) {
        return <p className="center">нет айтемов</p>
    }


    if (UserAdmt=='Adm'){
        var ty=  <li><a  href="/ChangeItem" >изменить айтем</a></li>
    }



    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>название</th>

    </tr>
    </thead>
    <tbody>
    { itms.map((itm, index) => {


            if (itm.intgr1!=undefined) {   var Pintgr1 = itm.intgr1
                var intgr1= <td>{Pintgr1}</td>;
                console.log(Pintgr1)      } else intgr1 =null
            if (itm.intgr2!=undefined) {   var Pintgr2 = itm.intgr2
                var intgr2= <td>{Pintgr2}</td>;
                console.log(Pintgr2)        } else intgr2 =null
            if (itm.intgr3!=undefined) {   var Pintgr3 = itm.intgr3
                var intgr3= <td>{Pintgr3}</td>;
                console.log(Pintgr3)       } else intgr3 =null
            if (itm.Cstr1!=undefined) {   var PCstr1 = itm.Cstr1
                var Cstr1= <td>{PCstr1}</td>;
                console.log(PCstr1)       } else Cstr1 =null
            if (itm.Cstr2!=undefined) {   var PCstr2 = itm.Cstr2
                var Cstr2= <td>{PCstr2}</td>;
                console.log(PCstr2)     } else Cstr2 =null
            if (itm.Cstr3!=undefined) {   var PCstr3 = itm.Cstr3
                var Cstr3= <td>{PCstr3}</td>;
                console.log(PCstr3)     } else Cstr3 =null
            if (itm.Ctxt1!=undefined) {   var PCtxt1 = itm.Ctxt1
                var Ctxt1= <td>{PCtxt1}</td>;
                console.log(PCtxt1)    } else Ctxt1 =null
            if (itm.Ctxt2!=undefined) {   var PCtxt2 = itm.Ctxt2
                var Ctxt2= <td>{PCtxt2}</td>;
                console.log(PCtxt2)    } else Ctxt2 =null
            if (itm.Ctxt3!=undefined) {   var PCtxt3 = itm.Ctxt3
                var Ctxt3= <td>{PCtxt3}</td>;
                console.log(PCtxt3)    } else Ctxt3 =null
            if (itm.Cdate1!=undefined) {   var PCdate1 = itm.Cdate1
                var Cdate1= <td>{PCdate1}</td>;
                console.log(PCdate1)    } else Cdate1 =null
            if (itm.Cdate2!=undefined) {   var PCdate2 = itm.Cdate2
                var Cdate2= <td>{PCdate2}</td>;
                console.log(PCdate2)      } else Cdate2 =null
            if (itm.Cdate3!=undefined) {   var PCdate3 = itm.Cdate3
                var Cdate3= <td>{PCdate3}</td>;
                console.log(PCdate3)    } else Cdate3 =null

            if (itm.Cbol1!=undefined) {   var PCbol1 = itm.Cbol1
                var Cbol1= <td>{PCbol1}</td>;
                console.log(PCbol1)     } else Cbol1 =null
            if (itm.Cbol2!=undefined) {   var PCbol2 = itm.Cbol2
                var Cbol2= <td>{PCbol2}</td>;
                console.log(PCbol2)     } else Cbol2 =null
            if (itm.Cbol3!=undefined) {   var PCbol3 = itm.Cbol3
                var Cbol3= <td>{PCbol3}</td>;
                console.log(PCbol3)     } else Cbol3 =null


            return (
                <tr key={itm._id}>

                <td>{itm.nazv}</td>
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
        <td><a  href="/ItemUnitSearchTag"> <button name={itm._id} onClick={changeHandler}  > открыть</button></a> </td>
            </tr>
        )
        }) }
    </tbody>



    </table>
)
}

export default ItemMapTagSearch;