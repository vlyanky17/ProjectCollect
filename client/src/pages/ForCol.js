import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'
import ReactDOM from "react-dom";
import Dropzone from "react-dropzone";
import {useCallback, useContext, useEffect, useState} from 'react'


class ForCol extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropzone1: [],
            dropzone2: [],
            form: {login:'', password:''}
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
    }

    render() {
        const { dropzone1, dropzone2 ,form} = this.state;
        const changeHandler = event => {
            this.setState({...form,[event.target.name]: event.target.value})
            console.log("111111")}
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
            <label for="name"><i class="icon-user"></i>название</label>
        <input type="text" id="name" name="name" placeholder="название " onChange={changeHandler} />

        <label for="ops"><i class="icon-user"></i>описание</label>
        <input type="text" id="ops" name="ops" placeholder="описание " onChange={changeHandler} />


            <Dropzone  onDrop={files => {this.addFilesToDropzone(files, "dropzone1");}} onChange={changeHandler}
    >
        {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="">
            <input {...getInputProps()} />
        <div style={{ height: 100,weight: 100, backgroundColor: "blue" }}>
          картинка
            {dropzone1.map(file => (
                <img
                src={file.preview}
                alt={file.path}
                style={{ width: 100, height: 100 }}
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