import React, { Component } from 'react';
import Navber from '../Navber/Navber';

import GalleryCarousel from '../GalleryCarousel';


class Gallery extends Component {
    
   
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
 
export default Gallery;