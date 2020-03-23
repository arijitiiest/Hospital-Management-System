import React, { Component } from 'react';
import Navber from './AdminNavbar';
import Footer from '../Footer';
import Homeimage from '../Homeimage';

class AdminContact extends Component {
 
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
 
export default AdminContact;