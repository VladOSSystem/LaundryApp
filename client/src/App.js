import React, { Fragment, useEffect } from 'react'
import Laundry from './components/Laundry'
import Profile from './components/Profile'
import Messanger from './components/Messanger'
import ErrorPage from './components/ErrorPage'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainCompilation from './components/MainCompilation'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import InnerMessage from './components/messanger/InnerMessaging'
import './App.css'
import './components/assets/css/main.css'
import Landing from './components/layouts/Landing'
import Routes from './components/routing/Routes' 
// redux  
import { Provider } from 'react-redux'
import store from './components/store'
import setAuthToken from './components/utils/setAuthToken'
import { loadUser } from './components/actions/auth';

const App = () => {  

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
    <Provider store={store}>
      <Router>
          <Route render={({location}) => (
            <TransitionGroup>  
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="slide"
            >
            <Switch location={location}>

                <Route exact path='/' component={Landing} />
                <Route component={Routes} location={location} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )}/>
            
            </Router>
        </Provider>
    </div>
  );
}

export default App;
