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
        const { dropzone1, nam ,ops,tem} = this.state;
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


            <Dropzone  onDrop={files => {this.addFilesToDropzone(files, "dropzone1");}} onChange={changeHandler}
    >
        {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="">
            <input {...getInputProps()} />
        <div style={{ height: 100,weight: 100, backgroundColor: "DarkKhaki" }}>
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

        </form>
        </div>
    );
    }
}

export default ForCol;