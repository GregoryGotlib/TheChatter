import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, deleteAccount } from '../../actions/profileAction';
import { userLogout } from '../../actions/authAction';
import Profile from './Profile'
import Spinner from '../base/Spinner';

class ProfileDash extends Component {
    componentDidMount(){
        this.props.getProfile();
    }

    onDeleteHandler = (e) =>{
      this.props.deleteAccount();
      this.props.userLogout();
    }
  render() {
    const loading = this.props.profile.loading
    const profile = this.props.profile.profile
    const user = this.props.auth.user;
    let showData;

    if(profile === null || loading){
      showData = <Spinner/>
    }
    else{
      // If user have a profile
      if(Object.keys(profile).length > 0){
        showData = (
        <div>
          <p className="lead text-muted">
          Welcome {user.first_name} {user.last_name}
          <span style={{marginLeft:'65px'}}><button className="btn btn-danger" onClick={this.onDeleteHandler}>Delete Account</button> </span>
          </p>
          <Profile/>
          <div style={{marginBottom: '60px'}}>
          </div>
        </div>
        )
      }
      else{
        showData = (
          <div>
            <p className="lead text-muted">Welcome {user.first_name} {user.last_name} !</p>
            <p style={{color:'red'}}>You dont have a profile yet, please create one</p>
            <a href="/CreateProfile" className="btn btn-lg btn-primary">Create Profile</a>
          </div>
        )
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="card mt-20 shadow-lg p-3 mb-2 bg-white rounded text-center"><h1 className="display-4">Profile Dashboard</h1> 
            {showData}
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  profile:state.profile,
  auth:state.auth
});

export default connect(mapStateToProps,{ getProfile, deleteAccount,userLogout })(ProfileDash);
