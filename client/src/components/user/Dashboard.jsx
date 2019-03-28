import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:'250px',marginBottom:'150px'}}> 
        <div className="row">
            <a href="" className="btn btn-info btn-block mr-5" style={{width:'270px'}}>Profile</a>
            <a href="" className="btn btn-success  btn-block mr-5" style={{width:'270px'}}>Start Chatting</a>
            <a href="" className="btn btn-primary  btn-block mr-5" style={{width:'270px'}}>Dunno</a>
        </div>
      </div>
    )
  }
}
