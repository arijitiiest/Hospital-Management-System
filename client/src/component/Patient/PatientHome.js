import React, { Component } from 'react';
import Navber from './PatientNavbar';
import Footer from '../Footer';
import doc_img from './doctor1.jpg';
import 'mdbreact';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class PatientHome extends Component {

    constructor(){
      super();
      this.state = {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        phone_no: "",
        disease: "",
        doctor_firstname: "",
        doctor_lastname: "",
        specialist: "",

        medicine_cost: '',
        misc_charge: '',
        room_charge: '',
        operation_charge: '',


        bill: []
      }
    }
    
    componentDidMount(){
      axios.get('/patient/details',{
        headers: {
          authorization: sessionStorage.getItem('usertoken')
        }
      })
        .then(res => {
          const details = res.data[0];
          this.setState({
            first_name: details.first_name,
            last_name: details.last_name,
            address: details.address,
            email: details.email,
            phone_no: details.phone_no,
            disease: details.disease
          })
        });
      
      axios.get('/patient/doctor',{
        headers: {
          authorization: sessionStorage.getItem('usertoken')
        }
      })
        .then(res => {
          if(res.data.length !== 0) {
            const details = res.data[0];
            this.setState({
              doctor_firstname: details.doctor_firstname,
              doctor_lastname: details.doctor_lastname,
              specialist: details.specialisation
            })
          }
          else {
            this.setState({
              doctor_firstname: 'No Doctor Assigned'
            })
          } 
        });

      axios.get('/patient/bill', {
          headers: {
            authorization: sessionStorage.getItem('usertoken')
          }
        })
        .then(res => {
          this.setState({
            medicine_cost: res.data[0].medicine_cost,
            misc_charge: res.data[0].misc_charge,
            room_charge: res.data[0].room_charge,
            operation_charge: res.data[0].operation_charge
          });
        })
    }


    render() { 
        return(
          <div className="bg-dark">
            <Navber />
            <h2 className="text-white my-3" align="center">Patient Home</h2>
            <h3 className="text-white my-3" align="center">Welcome!</h3>

            <Row>
              <Col>
                <Row>



                <div className="col">
                    <div className="container ml-3">
                      <div className="jumbotron mt-5" style ={{backgroundColor:"#e0e0e0"}}>
                        <div className="col-sm-6">
                          <h2 className="text-primary">Patient Information</h2>
                        </div>
                        <br/>
                        
                        <table className="table col-md-6" >
                          <tbody>
                            <tr>
                              <td>Name</td>
                              <td>
                                {this.state.first_name} {this.state.last_name}
                              </td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>{this.state.email}</td>
                            </tr>
                            <tr>
                            <td>Address</td>
                            <td>{this.state.address}</td>
                          </tr>
                          <tr>
                          <td>Phone number</td>
                              <td>{this.state.phone_no}</td>
                          </tr>
                          <tr>
                          <td>Disease</td>
                              <td>{this.state.disease}</td>
                          </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                    </div>




                </Row>
                <Row>



                <div className = "col">
                  <div className="container ml-3">
                  <div className="jumbotron mt-5" style ={{backgroundColor:"#e0e0e0"}}>
                    <div className="col-sm-6">
                      <h2 className="text-primary">Patient Bill</h2>
                    </div>
                    <br/>
            
                    <table className="table col-md-6" >
                      <tbody>
                          <tr>
                            <td>Medicine Cost</td>
                            <td>
                              {this.state.medicine_cost}
                            </td>
                          </tr>
                          <tr>
                            <td>Operation Charge</td>
                            <td>{this.state.operation_charge}</td>
                          </tr>
                          <tr>
                            <td>Room Charge</td>
                            <td>{this.state.room_charge}</td>
                          </tr>
                          <tr>
                          <td>Miscellaneous Charge</td>
                          <td>{this.state.misc_charge}</td>
                          </tr>

                          <tr>
                            <td>Total </td>
                            <td>{this.state.misc_charge + this.state.room_charge + this.state.operation_charge + this.state.medicine_cost}</td>
                          </tr>
                      
                      </tbody>
                    </table>
                  </div>
                </div>

                  </div>




                </Row>
              </Col>
              <Col>




              <div className="col ">
                <br/>
                <br/>
                <div className="card card-cascade narrower mr-3" style ={{backgroundColor:"#e0e0e0"}}>
                  <h2 className="text-primary card-body card-body-cascade text-center mt-3  ">Doctor Information</h2>

                  <Image width={520} height={760} className="img-responsive center-block my-5" src={doc_img} thumbnail />
                
                  <div className="card-body card-body-cascade text-center">
              
                  
                  <h4 className="card-title"><strong>{this.state.doctor_firstname} {this.state.doctor_lastname} </strong></h4>
                  
                  <h5 className="blue-text pb-2"><strong>{this.state.specialist}</strong></h5>
                  
                  <p className="card-text">The doctor currently assigned to the patient</p>
                    
                  </div>
                
                </div>
              </div>




              </Col>
            </Row>


            <Footer />
          </div>
        )



    }
}
 
export default PatientHome;