import React, { useState } from 'react'
import { connect } from 'react-redux';
import './assets/css/login.css'
import { login } from './actions/auth'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const Login = ({ login, isAuthenticated}) => {

    const [formData, setFormData] = useState({
      email:'',
      password:''
    })
    const { email, password } = formData;

    const onSubmit = async e => { 
      e.preventDefault();
      login(email, password);
    } 

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    if (isAuthenticated) {
      return <Redirect to='/dashboard'/>
    }
    return ( 
        <div className={'main_login'}>
            <div className={'main_login_inner'}>
                    <h2>Zaloguj się</h2>
                    <form  onSubmit={e => onSubmit(e)}>
                      <h3>Poczta</h3>
                        <div className={"row"}>
                          <input 
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                            />
                        </div>
                      <h3>Hasło</h3>
                      <div className={"row"}>
                      <input 
                          type='password'
                          placeholder='Password'
                          name='password'
                          value={password}
                          onChange={e => onChange(e)}
                          minLength='6'
                        />
                    </div>
                      <FormButton title="Log in"/>
                    </form>
            </div>
        </div> 
    )
};

const FormButton = props => (
    <div id="button" className={"row"}> 
      <button type="submit">{props.title}</button>
    </div>
 );

 Login.propTypes = {
   login: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool 
 };
 const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
 });
  
export default connect(
  mapStateToProps,
  { login }
)(Login)