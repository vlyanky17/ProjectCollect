import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "../pages/Aut.css";
import {useHttp} from "../hooks/http.hook";


export const ItemMap = ({ itms }) => {
    const {loading, error,request} = useHttp()
    const [lod, setLod] = useState({nam:''})
    const storageName = 'userData'
    const data = JSON.parse(localStorage.getItem(storageName))
    const us = data.ColId

    const registerAl = async () => {
        try {
            console.log(us)
            const dat = await request('/ColForItm', 'POST',{us})

            setLod(dat[0])
            console.log(dat[0])

        } catch (e) {}
    }
    useEffect(() => {
        if (lod.nam==''){console.log('lod')
            registerAl()}
        console.log(lod)
        console.log("1111111") }
    )
    if (!itms.length) {
        return <p className="center">нет айтемов</p>
    }

    if (lod.intgr1!='') {   var Pintgr1 = lod.intgr1
        var intgr1= <th>{Pintgr1}</th>;
    }
    if (lod.intgr2!='') {   var Pintgr2 = lod.intgr2
        var intgr2= <th>{Pintgr2}</th>;
    }
    if (lod.intgr3!='') {   var Pintgr3 = lod.intgr3
        var intgr3= <th>{Pintgr3}</th>;
    }
    if (lod.Cstr1!='') {   var PCstr1 = lod.Cstr1
        var Cstr1= <th>{PCstr1}</th>;
    }
    if (lod.Cstr2!='') {   var PCstr2 = lod.Cstr2
        var Cstr2= <th>{PCstr2}</th>;
    }
    if (lod.Cstr3!='') {   var PCstr3 = lod.Cstr3
        var Cstr3= <th>{PCstr3}</th>;
    }
    if (lod.Ctxt1!='') {   var PCtxt1 = lod.Ctxt1
        var Ctxt1= <th>{PCtxt1}</th>;
    }
    if (lod.Ctxt2!='') {   var PCtxt2 = lod.Ctxt2
        var Ctxt2= <th>{PCtxt2}</th>;
    }
    if (lod.Ctxt3!='') {   var PCtxt3 = lod.Ctxt3
        var Ctxt3= <th>{PCtxt3}</th>;
    }
    if (lod.Cdate1!='') {   var PCdate1 = lod.Cdate1
        var Cdate1= <th>{PCdate1}</th>;
    }
    if (lod.Cdate2!='') {   var PCdate2 = lod.Cdate2
        var Cdate2= <th>{PCdate2}</th>;
    }
    if (lod.Cdate3!='') {   var PCdate3 = lod.Cdate3
        var Cdate3= <th>{PCdate3}</th>;
    }

    if (lod.Cbol1!='') {   var PCbol1 = lod.Cbol1
        var Cbol1= <th>{PCbol1}</th>;
    }
    if (lod.Cbol2!='') {   var PCbol2 = lod.Cbol2
        var Cbol2= <th>{PCbol2}</th>;
    }
    if (lod.Cbol3!='') {   var PCbol3 = lod.Cbol3
        var Cbol3= <th>{PCbol3}</th>;
    }


    return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>название</th>

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
    <tbody>
    { itms.map((itm, index) => {
            var  intgr1 = null
            var  intgr2= null
            var  intgr3= null
            var  Cstr1= null
            var  Cstr2= null
            var Cstr3= null
            var  Ctxt1= null
            var Ctxt2= null
            var Ctxt3= null
            var Cdate1= null
            var Cdate2= null
            var Cdate3= null
            var  Cbol1= null
            var  Cbol2= null
            var Cbol3= null

            if (itm.intgr1!="") {   var Pintgr1 = itm.intgr1
                 intgr1= <td>{Pintgr1}</td>;
      console.log(Pintgr1)      }
            if (itm.intgr2!="") {   var Pintgr2 = itm.intgr2
                 intgr2= <td>{Pintgr2}</td>;
                console.log(Pintgr2)        }
            if (itm.intgr3!="") {   var Pintgr3 = itm.intgr3
                 intgr3= <td>{Pintgr3}</td>;
                console.log(Pintgr3)       }
            if (itm.Cstr1!="") {   var PCstr1 = itm.Cstr1
                 Cstr1= <td>{PCstr1}</td>;
                console.log(PCstr1)       }
            if (itm.Cstr2!="") {   var PCstr2 = itm.Cstr2
                 Cstr2= <td>{PCstr2}</td>;
                console.log(PCstr2)     }
            if (itm.Cstr3!="") {   var PCstr3 = itm.Cstr3
                 Cstr3= <td>{PCstr3}</td>;
                console.log(PCstr3)     }
            if (itm.Ctxt1!="") {   var PCtxt1 = itm.Ctxt1
                 Ctxt1= <td>{PCtxt1}</td>;
                console.log(PCtxt1)    }
            if (itm.Ctxt2!="") {   var PCtxt2 = itm.Ctxt2
                 Ctxt2= <td>{PCtxt2}</td>;
                console.log(PCtxt2)    }
            if (itm.Ctxt3!="") {   var PCtxt3 = itm.Ctxt3
                 Ctxt3= <td>{PCtxt3}</td>;
                console.log(PCtxt3)    }
            if (itm.Cdate1!="") {   var PCdate1 = itm.Cdate1
                 Cdate1= <td>{PCdate1}</td>;
                console.log(PCdate1)    }
            if (itm.Cdate2!="") {   var PCdate2 = itm.Cdate2
                 Cdate2= <td>{PCdate2}</td>;
                console.log(PCdate2)      }
            if (itm.Cdate3!="") {   var PCdate3 = itm.Cdate3
                 Cdate3= <td>{PCdate3}</td>;
                console.log(PCdate3)    }

            if (itm.Cbol1!="") {   var PCbol1 = itm.Cbol1
                 Cbol1= <td>{PCbol1}</td>;
                console.log(PCbol1)     }
            if (itm.Cbol2!="") {   var PCbol2 = itm.Cbol2
                 Cbol2= <td>{PCbol2}</td>;
                console.log(PCbol2)     }
            if (itm.Cbol3!="") {   var PCbol3 = itm.Cbol3
                 Cbol3= <td>{PCbol3}</td>;
                console.log(PCbol3)     }


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

            </tr>
        )
        }) }
    </tbody>



    </table>
)
}

export default ItemMap;