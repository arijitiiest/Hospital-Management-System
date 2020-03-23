import React, { Component } from 'react';
import OurDoctors from '../OurDoctors'
import Navber from './AdminNavbar';
import '../Home/Home.css';
import Homeimage from '../Homeimage';
import Footer from '../Footer';
import HomeQuote from '../HomeQuote';
import Mission from '../Mission';

class AdHome extends Component {
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

export default AdHome;