
import React, {useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";


export const ForReg = () =>{
    const {loading, error,request} = useHttp()
    const [form, setForm] = useState( {login:'', password:''})

    const changeHandler = event => {
        setForm({...form,[event.target.name]: event.target.value})}

    const registerHandler = async () => {
        try {

            const data = await request('/register', 'POST', {...form})
            console.log(data)
alert(data.message)
        } catch (e) {}
    }
    return(
        <div>
        <form class="form-2">
        <h1><span class="log-in">Регистрация</span></h1>

    <label for="login"><i class="icon-user"></i>Логин</label>
    <input type="text" id="login" name="login" placeholder="Логин " onChange={changeHandler} />

    <label for="password"><i class="icon-lock"></i>Пароль</label>
    <input type="password" id="password" name="password" placeholder="Пароль" class="showpassword"  onChange={changeHandler} />



    <p className="clearfix">

        <input type="submit" name="submit" value="регистрация" onClick={registerHandler} disabled={loading} href="/"/>

        </p>
        <p className="clearfix">

        <a href="/Aut" >Авторизация</a>

        </p>
        <a href="/" >Главная</a>
    </form>

    </div>
)

}
export default ForReg;