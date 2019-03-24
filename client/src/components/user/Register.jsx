import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userReg } from '../../actions/authAction'
import classnames from 'classnames';

class Register extends Component {

    constructor(){
        super();
    }

    state = {
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        confirmPassword:'',
        errors:{}
    }


    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
    const errors = this.props.errors;

    return (
    <div className="container">
    <div className="card mt-20 shadow-sm p-3 mb-2 bg-white rounded text-center"><h1 className="display-4">Registration Form</h1> </div>
      <div className="card mt-20 shadow p-3 mb-5 bg-white rounded">
        <div className="register">
            <div className="container">
                <div className="row">       
                    <div className="col-md-8 m-auto">
                        <br/>
                        <form noValidate>
                            <div className="form-group">
                                <input 
                                type="text" 
                                className={classnames('form-control form-control-lg',{
                                'is-invalid':errors.first_name})}
                                placeholder="First name" 
                                name="first_name" 
                                value={this.state.first_name}
                                onChange={this.onChange} />
                                {errors.first_name && (<div className="invalid-feedback">{errors.first_name}</div>)}
                            </div>

                            <div className="form-group">
                                <input 
                                type="text" 
                                className={classnames('form-control form-control-lg',{
                                'is-invalid':errors.last_name})}
                                placeholder="Last name" 
                                name="last_name" 
                                value={this.state.last_name}
                                onChange={this.onChange} />
                                {errors.last_name && (<div className="invalid-feedback">{errors.last_name}</div>)}
                            </div>

                            <div className="form-group">
                                <input 
                                type="email" 
                                className={classnames('form-control form-control-lg',{
                                'is-invalid':errors.email})}
                                placeholder="Email address" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.onChange} />
                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                <small className="form-text text-muted">This site uses Gravatar, please use Gravatar email for profile image</small>
                            </div>

                            <div className="form-group">
                                <input 
                                type="password" 
                                className={classnames('form-control form-control-lg',{
                                'is-invalid':errors.password})}
                                placeholder="Password" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.onChange} />
                                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                            </div>

                            <div className="form-group">
                                <input 
                                type="password" 
                                className={classnames('form-control form-control-lg',{
                                'is-invalid':errors.confirmPassword})}
                                placeholder="Confirm password" 
                                name="confirmPassword" 
                                value={this.state.confirmPassword}
                                onChange={this.onChange} />
                                {errors.confirmPassword && (<div className="invalid-feedback">{errors.confirmPassword}</div>)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}


const mapStateToProps = (state) =>({
    errors:state.errors_R
})

export default connect(mapStateToProps,{userReg})(Register);