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
      <div className="card mt-20 shadow p-3 mb-5 bg-white rounded">
        <div className="register">
            <div className="container">
                <div className="row">       
                    <div className="col-md-8 m-auto">
                        <h1 className="display-6 text-center">
                         Create Account   
                        </h1>
                        <br/>
                        <form noValidate>
                            <div className="form-group">
                                <input 
                                type="text" 
                                className={classnames('form-control form-control-lg',{
                                'is-invalid':errors.first_name})}
                                placeholder="Your first name" 
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
                                placeholder="Your last name" 
                                name="last_name" 
                                value={this.state.last_name}
                                onChange={this.onChange} />
                                {errors.last_name && (<div className="invalid-feedback">{errors.last_name}</div>)}
                            </div>
                        </form>
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