import React from 'react'
import './assets/css/login.css'
export default function Login() {
    
    return ( 
        <div className={'main_login'}>
            <div className={'main_login_inner'}>
                    <h2>Zaloguj się</h2>
                    <h3>Poczta</h3>
                    <FormInput  type="text" />
                    <h3>Hasło</h3>
                    <FormInput  type="password"/>
                    <FormButton title="Log in"/>
            </div>
        </div> 
    )
}
const FormButton = props => (
    <div id="button" className={"row"}> 
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div className={"row"}>
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  
