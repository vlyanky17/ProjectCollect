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
        return (
        <table class="resp-tab">
        <thead>
        <tr>

        <th>название</th>
        <th>айтем</th>
    {intgr1}
    {intgr2}
    {intgr3}
    {Cstr1}
    {Cstr2}
    {Cstr3}

        </tr>
        </thead>




    </table>
)
}

export default ItemMap;