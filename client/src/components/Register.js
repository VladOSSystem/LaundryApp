import React, { useState } from 'react'
import { connect } from 'react-redux';
import './assets/css/login.css'
import { register } from './actions/auth'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
const Register = ({register, isAuthenticated}) => {
  
    const [formData, setFormData] = useState({
        name:'',
        surname:'',
        email:'',
        password:'',
        password2:''
      })
      const { name, surname, email, password, password2 } = formData;

      const onSubmit = async e => { 
        e.preventDefault();
        console.log(name, surname, email, password,password2)
        register(formData);
      } 

      const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
      
      if (isAuthenticated) {
        return <Redirect to='/dashboard'/>
      }

    return (
         <div className={'main_login'}>
            <div className={'main_login_inner main_login_inner_register'}>
                    <h2>Zarejestruj się</h2>
                    <form  onSubmit={e => onSubmit(e)}>
                      <h3>Imię</h3>
                        <div className={"row"}>
                          <input 
                            type='text'
                            placeholder='Imię'
                            name='name'
                            value={name}
                            onChange={e => onChange(e)}
                            required
                            />
                        </div>
                      <h3>Nazwisko</h3>
                      <div className={"row"}>
                      <input 
                          type='text'
                          placeholder='Nazwisko'
                          name='surname'
                          value={surname}
                          onChange={e => onChange(e)}
                        />
                    </div>
                    <h3>Email</h3>
                      <div className={"row"}>
                      <input 
                          type='email'
                          placeholder='Email'
                          name='email'
                          value={email}
                          onChange={e => onChange(e)}
                          minLength='6'
                        />
                        
                    </div>
                    <h3>Hasło</h3>
                    <div className={"row"}>
                    <input 
                        type='password'
                        placeholder='Hasło'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                      />
                      
                  </div>
                  <h3>Powtórz hasło</h3>
                  <div className={"row"}>
                  <input 
                      type='password'
                      placeholder='Powtórz hasło'
                      name='password2'
                      value={password2}
                      onChange={e => onChange(e)}
                      minLength='6'
                    />
                    
                </div>
                      <FormButton title="Rejestruj"/>
                    </form>
            </div>
        </div> 
    )
}
const FormButton = props => (
    <div id="button" className={"row"}> 
      <button type="submit">{props.title}</button>
    </div>
 );

 Register.propTypes = {
   register: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool 
 };
 const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
 });
  
 export default connect(
    mapStateToProps,
    { register }
  )(Register)