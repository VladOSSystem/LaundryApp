import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Laundry from '../Laundry'
import Profile from '../Profile'
import Messanger from '../Messanger'
import ErrorPage from '../ErrorPage'
import Login from '../Login'
import Register from '../Register'
import MainCompilation from '../MainCompilation'
import InnerMessage from '../messanger/InnerMessaging'
import PrivateRoute from '../routing/PrivateRoute'

const Routes = (props) => {
    return (
         <Switch location={props.location}>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
            <PrivateRoute exact path='/dashboard' component={MainCompilation}/>
            <PrivateRoute exact path='/profile' component={Profile}/>
            <PrivateRoute exact path='/laundryStatus' component={Laundry}/>
            <PrivateRoute exact path='/messanger' component={Messanger}/>
            <PrivateRoute exact path='/message/:id' component={InnerMessage}/>
            <Route  path='*' component={ErrorPage}/>
          </Switch>
    )
}

export default Routes; 