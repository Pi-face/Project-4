import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Header  from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
     <Fragment>

        <Header />

           <div className='container'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
            </Switch>
           </div>

     </Fragment>
    </Router>
  );
}

export default App;
