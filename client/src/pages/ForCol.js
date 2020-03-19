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
            <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)">

            </input>
            <Dropzone onDrop={files => {this.addFilesToDropzone(files, "dropzone1");}}
    >
        {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="">
            <input {...getInputProps()} />
        <div style={{ height: 100, backgroundColor: "yellow" }}>
            Drop some files here
            {dropzone1.map(file => (
                <img
                src={file.preview}
                alt={file.path}
                style={{ width: 40, height: 40 }}
                />
            ))}
        </div>
        </div>
        )}
    </Dropzone>


        </div>
    );
    }
}

export default ForCol;