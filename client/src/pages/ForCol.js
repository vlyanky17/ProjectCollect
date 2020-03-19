import React, {useCallback, useContext, useEffect, useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from "../hooks/http.hook";
import './Aut.css';
import 'materialize-css'
import ReactDOM from "react-dom";
import Dropzone from "react-dropzone";



class ForCol extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropzone1: [],
            dropzone2: []
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
        const { dropzone1, dropzone2 } = this.state;
        
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



            <Dropzone onDrop={files => {this.addFilesToDropzone(files, "dropzone1");}}
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