  
import React, { Component } from 'react';
import Navber from '../Navber/Navber';
import Footer from '../Footer';
import axios from 'axios';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      address: '',
      phone_no: '',
      disease: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      phone_no: this.state.phone_no,
      disease: this.state.disease
    }

    axios.post('/patient/register', newUser)
      .then(responce => {
        console.log('Registered');
        return responce.data;
      }) 
      .then(res => {
        if(res === 'user already exist...') {
          this.setState({errors: res})
        }else {
          this.props.history.push(`/patient/login`)
        }
      })
  }

  render() {
    return (
        <div className="body">
        <Navber />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit} >
              <h1 className="h3 mb-3 font-weight-normal btn-rg">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter your Resident Address"
                  value={this.state.address}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone_no"
                  placeholder="Enter your Phone Number"
                  value={this.state.phone_no}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Disease</label>
                <input
                  type="text"
                  className="form-control"
                  name="disease"
                  placeholder="Enter your Phone Number"
                  value={this.state.disease}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
      </div>
    )
  }
}

export default Register;