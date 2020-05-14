import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header  from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import 'bootstrap/dist/css/bootstrap.min.css';

import FlashcardsState from './context/category/flashcardsState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'

function App() {
  return (
    <AuthState>
    <FlashcardsState>
      <AlertState>
    <Router>
        <Fragment>

        <Header />

           <div className='container'>
            <Alerts/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
            </Switch>
           </div>

        </Fragment>
       </Router>
       </AlertState>
    </FlashcardsState>
    </AuthState>
  );
}

export default App;
