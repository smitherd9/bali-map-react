import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from './header';
import MapContainer from './map';
import Description from './description';
import Footer from './footer';
import "./audio/peliatan.mp3";
import "./audio/getas.mp3";
import "./audio/geladag.mp3";
import "./audio/dauh-kutuh-ubung.mp3";
import "./audio/kokar.mp3";
import "./img/toth-plots/peliatan-toth-plot.png";
import "./img/toth-plots/getas-toth-plot.png";
import "./img/toth-plots/kokar-toth-plot.png";
import "./img/toth-plots/gladag-toth-plot.png";
import "./img/toth-plots/dauh-kutuh-ubung-toth-plot.png";





library.add(fab);

function App() {
  return (
    <div className="App">
      <div className="contentContainer">
      <Header />
      <Description />
      <MapContainer />
      </div>
      <Footer />
    </div>
    
    
  );
}

export default App;

