import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class HomeQuote extends Component {
    
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className = "col-md-3 ml-5 mr-5 mb-1">
                    
                    <Card bg="primary" text="white" style={{ width: '18rem' }}>
                    <Card.Header>New Section Added</Card.Header>
                    <Card.Body>
                      <Card.Title>Inaugeration of New Section</Card.Title>
                      <Card.Text className = "text-white">
                        A Section containing facilities such as a new Research and Developement Cell, 
                        Operation Theater and a Check-Up center.

                      </Card.Text>
                      <br/>
                    </Card.Body>
                  </Card>
                    </div>
                    <div className = "col-md-3 ml-3 mr-3">
                    <Card bg="success" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Best Hospital Award</Card.Header>
                    <Card.Body>
                      <Card.Title>Awarded to be Best Hospital in Kolkata</Card.Title>
                      <Card.Text>
                        We are overwhelmed by the support our patients provide us and 
                        you made us the best in Kolkata!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                    </div>
                    <div className = "col-md-3 ml-3 mr-2">
                    <Card bg="warning" text="white" style={{ width: '18rem' }}>
                    <Card.Header>RnD Update</Card.Header>
                    <Card.Body>
                      <Card.Title>Medicinal Contribution</Card.Title>
                      <Card.Text>
                        Researcher Dr. Subhashish Karmakar found a new cure for microbes
                        growing on skin.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                    </div>
                </div>
                </div>
            
         );
    }
}
 
export default HomeQuote;