import React, { Component } from 'react';
import Navber from './DocNavbar';
import Footer from '../Footer';
import Homeimage from '../Homeimage';

class DocContact extends Component {
 
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
 
export default DocContact;