import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import './select-css.css';
import 'materialize-css'
import ReactDOM from "react-dom";
import Dropzone from "react-dropzone";
import {useCallback, useContext, useEffect, useState} from 'react'


class ForCol extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropzone1: [],
            nam:'',
            ops:'',
            tem:'',
            intgr1:'',
            intgr2:'',
            intgr3:'',
            Cstr1:'',
            Cstr2:'',
            Cstr3:'',
            Cdate1:'',
            Cdate2:'',
            Cdate3:'',
            Ctxt1:'',
            Ctxt2:'',
            Ctxt3:'',
            Cbol1:'',
            Cbol2:'',
            Cbol3:'',
        };
    }

    addFilesToDropzone(files, dropzone) {
        let files_with_preview = [];
        files.map(file => {
            file["preview"] = URL.createObjectURL(file);
            files_with_preview.push(file);
        });

        const new_files = [...this.state[dropzone], ...files_with_preview];
        this.setState({ [dropzone]: new_files });
        console.log(new_files)
        console.log(files)
    }

    render() {
        const {loading, error,request} = useHttp()
        const { dropzone1, nam ,ops,tem,intgr1,intgr2,intgr3,Cstr1,Cstr2,Cstr3,Cdate1,Cdate2,Cdate3,Ctxt1,Ctxt2,Ctxt3,Cbol1,Cbol2,Cbol3} = this.state;
        const changeHandler = event => {
            this.setState({[event.target.name]: event.target.value})
            console.log("111111")
            console.log(this.state)}

        return (
            <div className="App">
            <nav>
            <div className="nav-wrapper" style={{ padding: '0 ' }}>

    <ul id="nav-mobile" className="right hide-on-med-and-down">


            <li><a  href="/Cab" >назад</a></li>
        <li><a href="/">Главная </a></li>
        </ul>
        </div>
        </nav>
        <form class="form-2">
            <label for="nam"><i class="icon-user"></i>название</label>
        <input type="text" id="nam" name="nam" placeholder="название " onChange={changeHandler} />

        <label for="ops"><i class="icon-user"></i>описание</label>
        <input type="text" id="ops" name="ops" placeholder="описание " onChange={changeHandler} />
        <label for="tem"><i class="icon-user"></i>Тема</label>
        <select class="select-css" name="tem" id="tem" onChange={changeHandler}>
            <option value=""></option>
            <option value="Alcohol" id="Alcohol">Alcohol </option>
        <option value="Books" id="Books">Books </option>
        <option value="Marks" id="Marks">Marks </option>
            </select>
            <p className="clearfix">
            <label for=""><i class="icon-user"></i>Необязательные поля</label>

            <hr class="hr-shelf"/>
            </p>
            <Dropzone  onDrop={files => {this.addFilesToDropzone(files, "dropzone1");}} onChange={changeHandler}
    >
        {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="">
            <input {...getInputProps()} />
        <div style={{ height: 100,weight: 100, backgroundColor: "PeachPuff" }}>
          картинка
            {dropzone1.map(file => (
                <img
                src={file.preview}
                alt={file.path}
                style={{ width: 80, height: 80 }}
                />
            ))}
        </div>
        </div>
        )}
    </Dropzone>
        <label for="intgr1"><i class="icon-user"></i>первое числовое поле</label>
        <input type="text" id="intgr1" name="intgr1" placeholder="название числового поля " onChange={changeHandler} />
        <label for="intgr2"><i class="icon-user"></i>второе числовое поле</label>
        <input type="text" id="intgr2" name="intgr2" placeholder="название числового поля " onChange={changeHandler} />
        <label for="intgr3"><i class="icon-user"></i>третье числовое поле</label>
        <input type="text" id="intgr3" name="intgr3" placeholder="название числового поля " onChange={changeHandler} />


        <label for="Cstr1"><i class="icon-user"></i>первое строковое поле</label>
        <input type="text" id="Cstr1" name="Cstr1" placeholder="название строкового поля " onChange={changeHandler} />
        <label for="Cstr2"><i class="icon-user"></i>второе строковое поле</label>
        <input type="text" id="Cstr2" name="Cstr2" placeholder="название строкового поля " onChange={changeHandler} />
        <label for="Cstr3"><i class="icon-user"></i>третье строковое поле</label>
        <input type="text" id="Cstr3" name="Cstr3" placeholder="название строкового поля " onChange={changeHandler} />


        <label for="Cdate1"><i class="icon-user"></i>первое  поле даты</label>
        <input type="text" id="Cdate1" name="Cdate1" placeholder="название поля даты " onChange={changeHandler} />
        <label for="Cdate2"><i class="icon-user"></i>второе  поле даты</label>
        <input type="text" id="Cdate2" name="Cdate2" placeholder="название поля даты  " onChange={changeHandler} />
        <label for="Cdate3"><i class="icon-user"></i>третье  поле даты</label>
        <input type="text" id="Cdate3" name="Cdate3" placeholder="название поля даты  " onChange={changeHandler} />


        <label for="Ctxt1"><i class="icon-user"></i>первое текстовое поле</label>
        <input type="text" id="Ctxt1" name="Ctxt1" placeholder="название текстового поля " onChange={changeHandler} />
        <label for="Ctxt2"><i class="icon-user"></i>второе текстовое поле</label>
        <input type="text" id="Ctxt2" name="Ctxt2" placeholder="название текстового поля " onChange={changeHandler} />
        <label for="Ctxt3"><i class="icon-user"></i>третье текстовое поле</label>
        <input type="text" id="Ctxt3" name="Ctxt3" placeholder="название текстового поля " onChange={changeHandler} />



        <label for="Cbol1"><i class="icon-user"></i>первое логическое поле</label>
        <input type="text" id="Cbol1" name="Cbol1" placeholder="название логического поля " onChange={changeHandler} />
        <label for="Cbol2"><i class="icon-user"></i>второе логическое поле</label>
        <input type="text" id="Cbol2" name="Cbol2" placeholder="название логического поля  " onChange={changeHandler} />
        <label for="Cbol3"><i class="icon-user"></i>третье логическое поле</label>
        <input type="text" id="Cbol3" name="Cbol3" placeholder="название логического поля  " onChange={changeHandler} />


        </form>
        </div>
    );
    }
}

export default ForCol;