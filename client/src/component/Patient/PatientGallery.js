import React, { Component } from 'react';
import Navber from './PatientNavbar';
import GalleryCarousel from '../GalleryCarousel';


class PatientGallery extends Component {
    
   
    render() { 
        return ( 
        <div className="bg-dark">
            <Navber />

            <br>
            </br>
            <GalleryCarousel/>
            
            
</div>

);
    }
}
 
export default PatientGallery;