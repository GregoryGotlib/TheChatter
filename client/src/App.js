import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Footer from './components/base/Footer';
import Navbar from '../src/components/base/Navbar'
import store from './store';
import Home from '../src/components/base/Home';
import jwt_decode from 'jwt-decode';
import setAuth from './utilities/setAuth';
import './App.css';

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
            <div className="container">
            </div>
          </div>
            <Footer/>
        </Router>
      </Provider>
    );
  }
}

export default App;
