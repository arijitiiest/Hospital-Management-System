import React, { Component } from 'react';
import Navber from './AdminNavbar';
import axios from 'axios';
import Footer from '../Footer';

class Admin extends Component {

  constructor(){
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone_no: "",
      designation: '',
      salary: '',
      password: '',

      del_emp_id: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit1 = this.onSubmit1.bind(this)
    this.onSubmit2 = this.onSubmit2.bind(this)
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit1(e) {
    e.preventDefault();

    const emp = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      address: this.state.address,
      phone_no: this.state.phone_no,
      designation: this.state.designation,
      salary: this.state.salary,
      password: this.state.password
    }

    // console.log(emp)

    axios.post('/admin/register', emp)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }

  onSubmit2(e) {
    e.preventDefault();


    axios.post('/admin/delete', {admin_id : this.state.del_emp_id})
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }



    render() { 
        return ( 
        <div className="bg-dark">
            <Navber />
            <br/>
            <h2 className="text-white" align="center">Administrator Home</h2>
            <h3 className="text-white" align="center">Welcome!</h3>
            <br></br>
            <br></br>
            <div className ="row">
              <div className = "col">
              <div className="container mx-auto">
              <div className="jumbotron mt-5" style ={{backgroundColor:"#e0e0e0"}}>
              <form noValidate onSubmit={this.onSubmit1} >
                <div className="col-sm-6">
                  <h2 className="text-primary">Add New Employee</h2>
                </div>
                <br/>
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter First Name"
                 value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter Last Name"
                 value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email Address"
                 value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter Address"
                 value={this.state.address}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  placeholder="Enter Designation"
                 value={this.state.designation}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Salary</label>
                <input
                  type="text"
                  className="form-control"
                  name="salary"
                  placeholder="Enter Salary Information"
                 value={this.state.salary}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone_no"
                  placeholder="Enter Phone Number"
                 value={this.state.phone_no}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                 value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
               type="submit"
              className="btn btn-lg btn-primary btn-block"
              >
              Enter Employee
              </button>
              </form>
              </div>
            </div>
              </div>

              <div className = "col">
              <div className="container mr-3">
              <div className="jumbotron mt-5" style ={{backgroundColor:"#e0e0e0"}}>
              <form noValidate onSubmit={this.onSubmit2} >
                <div className="col-sm-6">
                  <h3 className="text-primary">Delete Employee Information</h3>
                </div>
                <br/>
              <div className="form-group">
                <label htmlFor="name">Employee ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="del_emp_id"
                  placeholder="Enter Employee ID"
                 value={this.state.del_emp_id}
                  onChange={this.onChange}
                />
              </div>
              <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              >
              Delete
              </button>
            </form>
              </div>
            </div>
              </div>
            </div>
            <br/>
            <br/>
            <Footer />
                
        </div> 
        );
    }
}
 
export default Admin;