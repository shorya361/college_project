import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';  
import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import ContactState from './context/contact/ContactState';
import PrivateRoute from './components/routing/PrivateRoute';
import home_content from './components/pages/home_content';
import home_auth from './components/pages/home_auth';
import Contacts from './components/contacts/Contacts';
import Personal_detail from './components/contacts/Personal_detail';
import hospital from './components/pages/NearbyHospital';
import medicine from './components/pages/medicine';
if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App=()=> {
  return (
    <AuthState>
    <ContactState>
      <AlertState>
    <Router>
    <Fragment>
      <Navbar />
      <div className="container">
        <Alerts />
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/home_content_auth' component={home_auth} />
          <Route exact path='/home_content' component={home_content} />
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} /> 
          <Route exact path='/info' component={Contacts } /> 
          {/* <Route exact path='/personal-info' component={Personal_detail} /> */}
          <Route exact path = '/hospital' component={hospital} />
          <Route exact path = '/medicine' component={medicine} />
        </Switch>
      </div>
     
    </Fragment> 
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
