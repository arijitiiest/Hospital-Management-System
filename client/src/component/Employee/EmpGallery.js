import React, { Component } from 'react';
import Navber from './EmpNavbar';
import GalleryCarousel from '../GalleryCarousel';


class EmpGallery extends Component {
    
   
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
 
export default EmpGallery;