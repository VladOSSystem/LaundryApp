import React from 'react'
import Laundry from './components/Laundry'
import Profile from './components/Profile'
import Messanger from './components/Messanger'
import ErrorPage from './components/ErrorPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainCompilation from './components/MainCompilation'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './App.css'
import './components/assets/css/main.css'
import InnerMessage from './components/messanger/InnerMessaging'

const App = () => {    
  return (
    <div className="App">
    <Router>
        <Route render={({location}) => (
          <TransitionGroup>  
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="slide"
          >
          <Switch location={location}>
          <Route path="/" exact={true}>
              <MainCompilation/>
            </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/laundryStatus">
                  <Laundry />
              </Route>
              <Route path="/messanger">
                <Messanger />
              </Route>
              <Route path="/message/:id">
                 <InnerMessage />
              </Route>
            
              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )}/>
          
          </Router>
    </div>
  );
}

export default App;
