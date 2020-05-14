import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header  from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

import FlashcardsState from './context/category/flashcardsState'
import AuthState from './context/auth/AuthState'

function App() {
  return (
    <AuthState>
    <FlashcardsState>
    <Router>
        <Fragment>

        <Header />

           <div className='container'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/register' component={Register}/>
            </Switch>
           </div>

        </Fragment>
       </Router>
    </FlashcardsState>
    </AuthState>
  );
}

export default App;
