import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Footer from './components/base/Footer';
import Navbar from './components/base/Navbar'
import store from './store';
import Home from './components/base/Home';
import Register from './components/user/Register';
import Login from './components/user/Login';
import jwt_decode from 'jwt-decode';
import PrivateRoute from './utilities/privateRoute';
import setAuth from './utilities/setAuth';
import './App.css';
import Dashboard from './components/user/Dashboard';

// in case we have token
if(localStorage.userToken){
  setAuth(localStorage.userToken);

  //Decode token
  const decoded_token = jwt_decode(localStorage.userToken);

  //Set decoded user
  store.dispatch({
    type:'DECODED_USER',
    payload:decoded_token
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            </Switch>
          </div>
            <Footer/>
        </Router>
      </Provider>
    );
  }
}

export default App;
