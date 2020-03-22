import React, { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDropzone } from "react-dropzone";
import './Aut.css';
import './select-css.css';
import 'materialize-css'
import {useCallback, useContext, } from 'react'
import {useHttp} from "../hooks/http.hook";



export const ForCol = () =>{

    const image2base64 = require('image-to-base64');


    const baseStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        color: "#bdbdbd",
        outline: "none",
        transition: "border .24s ease-in-out"
    };

    const activeStyle = {
        borderColor: "#2196f3"
    };

    const acceptStyle = {
        borderColor: "#00e676"
    };

    const rejectStyle = {
        borderColor: "#ff1744"
    };

    const thumbsContainer = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16
    };

    const thumb = {
        display: "inline-flex",
        borderRadius: 2,
        border: "1px solid #eaeaea",
        marginBottom: 8,
        marginRight: 8,
        width: "auto",
        height: 200,
        padding: 4,
        boxSizing: "border-box"
    };

    const thumbInner = {
        display: "flex",
        minWidth: 0,
        overflow: "hidden"
    };

    const img = {
        display: "block",
        width: "auto",
        height: "100%"
    };

    const [form, setForm] = useState( {nam:'', disk:'',tem:'',pict:null,tem:'',intgr1:'',intgr2:'',intgr3:'',Cstr1:'',Cstr2:'',Cstr3:'',Cdate1:'',Cdate2:'',Cdate3:'',Ctxt1:'',Ctxt2:'',Ctxt3:'',Cbol1:'',Cbol2:'',Cbol3:''})
    const [yo, setyo] = useState( '')
    const [base6, setbase6] = useState( '')
    const [files, setFiles] = useState([]);
    const {loading, error,request} = useHttp()
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles,
        open
    } = useDropzone({
        accept: "image/*",
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            setFiles(
                acceptedFiles.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        }
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }),
        [isDragActive, isDragReject]
    );

    const changeHandler = event => {
        setForm({...form,[event.target.name]: event.target.value})

    }
    const tryHo= event => {
        setForm({...form,["pict"]:yo})
        console.log(form)

    }
    const addCol = async () => {

        image2base64(th) // you can also to use url
            .then(
                (response) => {
                    //cGF0aC90by9maWxlLmpwZw==
                    setForm({...form,["pict"]:response})
                    try {


                        console.log(form)
                        const data = await request('/adcol', 'POST', {...form})

                    } catch (e) {}
                }
            )
            .catch(
                (error) => {
                    console.log(error); //Exepection error....
                }
            )


    }


    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img src={file.preview} style={img} />
            </div>
        </div>
    ));
    const th = files.map(file => (

        file.preview

    ));






    var reader = new FileReader();
    reader.readAsDataURL(new Blob([new Uint8Array(th)]));
    reader.onloadend = function() {
        var base64data = reader.result;

        setbase6(base64data)
    }

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach(file => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    const filepath = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

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
                <label htmlFor="nam"><i className="icon-user"></i>название</label>
                <input type="text" id="nam" name="nam" placeholder="название " onChange={changeHandler}/>

                <label htmlFor="disk"><i className="icon-user"></i>описание</label>
                <input type="text" id="disk" name="disk" placeholder="описание " onChange={changeHandler}/>
                <label htmlFor="tem"><i className="icon-user"></i>Тема</label>
                <select className="select-css" name="tem" id="tem" onChange={changeHandler}>
                    <option value=""></option>
                    <option value="Alcohol" id="Alcohol">Alcohol</option>
                    <option value="Books" id="Books">Books</option>
                    <option value="Marks" id="Marks">Marks</option>
                </select>
                <p className="clearfix">
                    <label htmlFor=""><i className="icon-user"></i>Необязательные поля</label>

                    <hr className="hr-shelf"/>
                </p>
            <div className='container'>
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here</p>
                    <button type='button' onClick={open}>
                        Open File Dialog
                    </button>
                </div>


            </div>
            <img src={'data:image/jpeg;base64,' + yo} style={{ width: 200, height: 200 }} />

                <label htmlFor="intgr1"><i className="icon-user"></i>первое числовое поле</label>
                <input type="text" id="intgr1" name="intgr1" placeholder="название числового поля "
                       onChange={changeHandler}/>
                <label htmlFor="intgr2"><i className="icon-user"></i>второе числовое поле</label>
                <input type="text" id="intgr2" name="intgr2" placeholder="название числового поля "
                       onChange={changeHandler}/>
                <label htmlFor="intgr3"><i className="icon-user"></i>третье числовое поле</label>
                <input type="text" id="intgr3" name="intgr3" placeholder="название числового поля "
                       onChange={changeHandler}/>


                <label htmlFor="Cstr1"><i className="icon-user"></i>первое строковое поле</label>
                <input type="text" id="Cstr1" name="Cstr1" placeholder="название строкового поля "
                       onChange={changeHandler}/>
                <label htmlFor="Cstr2"><i className="icon-user"></i>второе строковое поле</label>
                <input type="text" id="Cstr2" name="Cstr2" placeholder="название строкового поля "
                       onChange={changeHandler}/>
                <label htmlFor="Cstr3"><i className="icon-user"></i>третье строковое поле</label>
                <input type="text" id="Cstr3" name="Cstr3" placeholder="название строкового поля "
                       onChange={changeHandler}/>


                <label htmlFor="Cdate1"><i className="icon-user"></i>первое поле даты</label>
                <input type="text" id="Cdate1" name="Cdate1" placeholder="название поля даты "
                       onChange={changeHandler}/>
                <label htmlFor="Cdate2"><i className="icon-user"></i>второе поле даты</label>
                <input type="text" id="Cdate2" name="Cdate2" placeholder="название поля даты  "
                       onChange={changeHandler}/>
                <label htmlFor="Cdate3"><i className="icon-user"></i>третье поле даты</label>
                <input type="text" id="Cdate3" name="Cdate3" placeholder="название поля даты  "
                       onChange={changeHandler}/>


                <label htmlFor="Ctxt1"><i className="icon-user"></i>первое текстовое поле</label>
                <input type="text" id="Ctxt1" name="Ctxt1" placeholder="название текстового поля "
                       onChange={changeHandler}/>
                <label htmlFor="Ctxt2"><i className="icon-user"></i>второе текстовое поле</label>
                <input type="text" id="Ctxt2" name="Ctxt2" placeholder="название текстового поля "
                       onChange={changeHandler}/>
                <label htmlFor="Ctxt3"><i className="icon-user"></i>третье текстовое поле</label>
                <input type="text" id="Ctxt3" name="Ctxt3" placeholder="название текстового поля "
                       onChange={changeHandler}/>


                <label htmlFor="Cbol1"><i className="icon-user"></i>первое логическое поле</label>
                <input type="text" id="Cbol1" name="Cbol1" placeholder="название логического поля "
                       onChange={changeHandler}/>
                <label htmlFor="Cbol2"><i className="icon-user"></i>второе логическое поле</label>
                <input type="text" id="Cbol2" name="Cbol2" placeholder="название логического поля  "
                       onChange={changeHandler}/>
                <label htmlFor="Cbol3"><i className="icon-user"></i>третье логическое поле</label>
                <input type="text" id="Cbol3" name="Cbol3" placeholder="название логического поля  "
                       onChange={changeHandler}/>
                <p className="clearfix">

                    <input type="submit" name="submit" value="добавить" onClick={addCol} />

                    <input type="text" id="tst" name="tst" placeholder="tst "
                           onChange={addCol}/>
                </p>
            </form>
        </div>

    );
}
export default ForCol;