import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
    <div className="btn-group mb-4" role="group">
        <a href="/editProfile" className="btn btn-light">
          <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile</a>
    </div>
    )
  }
}
