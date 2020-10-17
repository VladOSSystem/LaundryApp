import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './App.css'
import './components/assets/css/main.css'
import Landing from './components/layouts/Landing'
import Routes from './components/routing/Routes' 
import Alert from './components/layouts/Alert'
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
