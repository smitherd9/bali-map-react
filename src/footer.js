import React, { Component } from "react";
import "./App.css";



import {
    Grid,
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Modal,
    Button,
  } from "react-bootstrap";

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import barongLogo from "./img/barong-logo.png";


  function Footer() {
    return (
      <div className="footer">
          <Container fluid>
              <Row>
                  <Col lg={4} className="footer-col">
                      <div>
                      <img src={barongLogo} style={{width: "100px", height: "100px"}} alt="barong logo"></img>
                      </div>
                  </Col>
                  <Col lg={8} className="footer-col">
        {/* Facebook */}
        <div><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} className="fa-2x" /></a></div>
        {/* Twitter  */}
        <div><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter-square']} className="fa-2x" /></a></div>
        {/* Linkedin */}
        <div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className="fa-2x" /></a></div>
        {/* Instagram */}
        <div><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x" /></a></div>
                  </Col>
              </Row>
          </Container>

      </div>
    );
  }
  
  export default Footer;
  