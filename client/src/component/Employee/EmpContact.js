import React, { Component } from 'react';

import Navber from './EmpNavbar';
import Footer from '../Footer';
import Homeimage from '../Homeimage';

class EmpContact extends Component {
 
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
 
export default EmpContact;