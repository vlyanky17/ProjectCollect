
import React, {useContext, useState} from 'react';
import './Aut.css';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from '../context/AuthContext'


export const ForAut = () =>{
    const {loading, error,request} = useHttp()
    const [form, setForm] = useState( {login:'', password:''})
    const auth =useContext(AuthContext)
    const changeHandler = event => {
        setForm({...form,[event.target.name]: event.target.value})}

    const registerHandler = async () => {
        try {
            const data = await request('/register', 'POST', {...form})

        } catch (e) {}
    }
    const loginHandler = async () => {
        try {
            const data = await request('/login', 'POST', {...form})
            auth.login(data.token, data.userId,data.userAdm)
            console.log(data)
        } catch (e) {}
    }

    return(
        <div>
        <form class="form-2">
        <h1><span class="log-in">Авторизация</span></h1>

    <label for="login"><i class="icon-user"></i>Логин</label>
    <input type="text" id="login" name="login" placeholder="Логин " onChange={changeHandler} />


    <label for="password"><i class="icon-lock"></i>Пароль</label>
    <input type="password" id="password" name="password" placeholder="Пароль" class="showpassword"  onChange={changeHandler} />

    <p class="clearfix">

        <input type="submit" name="submit" value="Войти" disabled={loading} onClick={loginHandler}  />

    </p>
    <p className="clearfix">

        <a href="/Reg" >Регистрация</a>

    </p>
        <a href="/" >Главная</a>
    </form>
    </div>
)

}
export default ForAut;