import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Img1 from '../photos/doctor4.jpg'
import Img2 from '../photos/doctor2.jpg'
import Img3 from '../photos/doctor6.jpg'

class OurDoctors extends Component {
    
    render() { 
        return (     <div>
            <Carousel className ="container" style={{paddingLeft:100 ,paddingRight:100}}>
                <Carousel.Item  >
                <Card>
                <Card.Img variant="top" height="500" src={Img1} />
                <Card.Body>
                  <Card.Title className = "text-warning">Dr. Debashish Majumder</Card.Title>
                  <Card.Subtitle>Oncologist</Card.Subtitle>
                  <Card.Text>
                    Specialist in chemotherapy.
                  </Card.Text>
                </Card.Body>
                
              </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card>
                <Card.Img variant="top" height="300" src={Img2} />
                <Card.Body>
                  <Card.Title className = "text-warning">Dr. Disha Dey</Card.Title>
                  <Card.Subtitle>Psychiatrist</Card.Subtitle>
                  <Card.Text>
                    Specialist in curing schezophrania.
                  </Card.Text>
                </Card.Body>
                
              </Card>
                </Carousel.Item>
                <Carousel.Item >
                <Card>
                <Card.Img variant="top" height="300" src={Img3} />
                <Card.Body>
                  <Card.Title className = "text-warning">Dr. Silajit Deb</Card.Title>
                  <Card.Subtitle>Heart Specialist</Card.Subtitle>
                  <Card.Text>
                    Specialist in treatment of Heart Strokes.
                  </Card.Text>
                </Card.Body>
                
              </Card>
                </Carousel.Item>
                </Carousel>
                <br/>
                <br/>
                
                </div> );
    }
}
 
export default OurDoctors;