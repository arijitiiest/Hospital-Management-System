import React, { Component } from 'react';

import Navber from './PatientNavbar';
import Footer from '../Footer';
import Homeimage from '../Homeimage';

class PatientContact extends Component {
 
    render() { 
        return (
            
            <div className="bg-dark">
                <Navber/>
                <Homeimage/>
                <Footer/>
                </div>
                );
    }
}
 
export default  PatientContact;