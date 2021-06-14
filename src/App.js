import React, { Component } from "react";
import './App.css';

import Header from './header';
import MapContainer from './map';
import Description from './description';
import "./audio/peliatan.mp3";
import "./audio/getas.mp3";


function App() {
  return (
    <div className="App">
      <Header />
      <Description />

      <MapContainer />
      
    </div>
    
    
  );
}

export default App;

