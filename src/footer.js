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

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCopyright } from '@fortawesome/free-solid-svg-icons';

  import barongLogo from "./img/barong-logo.png";


  function Footer() {
    return (
      <div className="footer">
          <Container fluid>
              <Row>
                  <Col lg={12} className="footer-col">
                      <div>
                      <img src={barongLogo} style={{width: "100px", height: "100px"}} alt="barong logo"></img>
                      </div>
                  
                  
        {/* Facebook */}
        <div className="footer-social-div">
          <span className="footer-social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-square']} className="fa-2x" /></a>
          </span>
        {/* Twitter  */}
          <span className="footer-social-icons">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter-square']} className="fa-2x" /></a>
          </span>
        
        {/* Linkedin */}
        <span className="footer-social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className="fa-2x" /></a>
        </span>
        
        {/* Instagram */}
        <span className="footer-social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x" /></a>
        </span>
        </div>
        <div>
        <a href="https://smitherd9.github.io" target="_blank" rel="noreferrer"><span style={{color: "#fff"}}><FontAwesomeIcon icon={faCopyright} /> 2021 Daniel Smither</span></a>
        </div>
        </Col>

              </Row>
          </Container>

      </div>
    );
  }
  
  export default Footer;
  

