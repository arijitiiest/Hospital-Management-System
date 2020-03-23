import React, { Component } from 'react';
import HomeQuote from '../HomeQuote';
import Navber from './DocNavbar';
import '../Home/Home.css';

import Homeimage from '../Homeimage'
import OurDoctors from '../OurDoctors'
import Footer from '../Footer';
import Mission from '../Mission';

class DocHome extends Component {
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

export default DocHome;