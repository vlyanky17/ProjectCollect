import React from 'react';
import './Aut.css';

class Aut extends React.Component{
render(){
		return(<div>
			<form class="form-2" >
			<form onSubmit={this.props.GetLogMethod}>
			 <h1><span class="log-in">Войти</span> или <span class="sign-up">зарегистрироваться</span></h1>
			   <p class="float">
        <label for="login"><i class="icon-user"></i>Логин</label>
        <input type="text" name="login" placeholder="Логин "/>

        <label for="password"><i class="icon-lock"></i>Пароль</label>
        <input type="password" name="password" placeholder="Пароль" class="showpassword"/>
    </p>
    <p class="clearfix">
     <input type="submit" name="submit" value="Войти"/>
            </p>  
              	</form  >
              	  <p class="clearfix">
            	<form onSubmit={this.props.goRegg} >
            	 <input type="submit" name="submit" value="Зарегистрироваться"/>
			</form> 
			    </p>      
			</form>
			
			</div>
			);
	}
	}
export default Aut;