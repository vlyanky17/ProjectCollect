import React, { useCallback,useMemo,useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDropzone } from "react-dropzone";
import './Aut.css';
import './select-css.css';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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



function ForCol(props) {
    const [form, setForm] = useState( {nam:'', disk:'',tem:'',pict:'',intgr1:'',intgr2:'',intgr3:'',Cstr1:'',Cstr2:'',Cstr3:'',Cdate1:'',Cdate2:'',Cdate3:'',Ctxt1:'',Ctxt2:'',Ctxt3:'',Cbol1:'',Cbol2:'',Cbol3:''})
    const [yo, setyo] = useState( '')
    const [base6, setbase6] = useState( '')
    const [files, setFiles] = useState([]);
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
        setForm({...form,[event.target.name]: event.target.value})}


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
    console.log(thumbs)

    const changeH= event => {
        console.log("111111111111111")

    }
    image2base64(th) // you can also to use url
        .then(
            (response) => {
                //cGF0aC90by9maWxlLmpwZw==
                setyo(response)
                console.log(yo)
            }
        )
        .catch(
            (error) => {
                console.log(error); //Exepection error....
            }
        )

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


                        <li><a  href="/Cab">Создать коллекцию</a></li>
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
            <div className='container' onChange={changeH}>
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here</p>
                    <button type='button' onClick={open}>
                        Open File Dialog
                    </button>
                </div>


            </div>
            <img src={'data:image/jpeg;base64,' + yo} style={{ width: 200, height: 200 }} />
            </form>
        </div>

    );
}
export default ForCol;