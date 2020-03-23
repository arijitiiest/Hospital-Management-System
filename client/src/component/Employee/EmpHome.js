import React, { Component } from 'react';
import OurDoctors from '../OurDoctors'
import Navber from './EmpNavbar';
import '../Home/Home.css';
import HomeQuote from '../HomeQuote';
import Homeimage from '../Homeimage';
import Footer from '../Footer';
import Mission from '../Mission';

class EmpHome extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Navber />
                <Homeimage/>
                <Mission/>
                <br>
                </br>
                <br>
                </br>
                <h1 className="head text-white" align="center"> Our Doctors </h1>
                <br>
                
                </br>
                <br>
                
                </br>
                <br/>
                <br/>
                <OurDoctors/>
                <br></br>
                <br></br>
                <h1 className="text-white" align="center">News and Achievements</h1>
                <br/>
                <br/>
                <HomeQuote/>
                <br/>
                <br/>
                  
                <Footer/>
               
            </div>
        );
    }
}

export default EmpHome;