import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
     <div className="home">
      <div className="dark-overlay Base-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-2 mb-4" style={{color:'black'}}>Wellcome to The Chatter</h1>
              <h2 className="lead" style={{color:'black'}}>A place which keeps you in touch with your friends </h2>
              <hr/>
              <a href="/register" className="btn btn-lg btn-info mr-3 mt-3" style={{height:'1.5cm',width:'3cm'}}>Register </a>                        
              <a href="/login" className="btn btn-lg btn-success mt-3" style={{height:'1.5cm',width:'3cm'}}>Login</a> 
            </div>
          </div>
        </div>
      </div>
     </div>
    )
  }
}
