import React, { Component } from "react";
import "./App.css";
import nagra1 from "./img/Nagra-IV-S_1.jpg";
import nagra2 from "./img/Nagra-IV-S_2.jpg";
import kudelski from "./img/kudelski-slo-resolver.jpg";
import hale from "./img/hale-sight-o-tuner-1970s.jpg";

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

function Description() {
  return (
    <div className="description">
      <Container fluid>
        <Row>
        <Col xs={6} className="nagra nagra-main">
            <h2 className="main-text">In Bali in 1976, the ethnomusicologist Andrew Toth measured the tunings
            of each bronze key and kettle gong of 49 complete sets of gong keybar.</h2>
            <p>His notes state, "The tunings of approximately half of them were measured live,
                while the others were recoreded on a 
                <a href="https://www.redsharknews.com/audio/item/6347-one-audio-recorder-to-rule-them-all-a-look-back-at-the-nagra-iv" 
                target="_blank" rel="noreferrer"> Nagra-IV-S tape recorder</a> (pictured at right) with crystal synchronization pulse. The tapes were later 
                played back at correct speed by using a Kudelski Slo Resolver.  In both instances, the measurements 
                were made with the Hale-Sight-o-Tuner, a Stroboconn-type device which is solid state, portable
                and accurate to +/- 0.5 cent. All pitch measurements were made in terms of deviation from Western equal temperament, 
                with the octave defined as 1200 cents and the half step as 100 cents."
            </p>
            </Col>        
        </Row>
        <Row>
            <Col xs={6} className="nagra"><div style={{width: "100%", textAlign: "center"}}><img src={nagra1} 
            style={{width: "50%" , border: "1px solid black"}} alt="Nagra IV-S"></img><p><em>Nagra IV-S</em></p></div>
            </Col>
            <Col xs={6} className="nagra"><div style={{width: "100%", textAlign: "center"}}>
            <img src={nagra2} style={{width: "50%", border: "1px solid black"}} alt="Nagra IV-S"></img><p><em>Nagra IV-S</em></p></div>        
        </Col>        
        </Row>
        <Row>
        <Col xs={6} className="nagra"><img src={kudelski} style={{width: "50%"}} alt="Kudelski Slo Resolver"></img>
        <br /><img src={hale} style={{width: "50%"}} alt="Hale Sight-o-Tuner 1970s"></img>
        </Col>

        </Row>

        <Row>
            <Col xs={6} className="nagra">
                <h2>The map below was created using his tuning data and was input into SonicCouture's 
                    Balinese Gamelan II VST.  It is hoped that this will allow the listener a glimpse 
                    into the wildly diverse and beautiful world of Balinese tuning preferences throughout
                    the island by hearing samples of the same pieces played on different gamelan. 
                </h2>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Description;
