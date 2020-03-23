import React, { Component } from "react";
import "./Contact.css";
import Navber from "../Navber/Navber";
import Footer from "../Footer";
import Homeimage from "../Homeimage";

class Contact extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Navber />
        <div className="md-5">
          <Homeimage />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
