import React, { useState, Fragment } from 'react';
import { Image } from 'react-bootstrap';
import './App.css';


import { GoogleMap, 
  withScriptjs, 
  withGoogleMap,
  Marker,
  InfoWindow } from "react-google-maps";
  import * as mapStyles from "./data/map-styles";
  import * as banjarData from "./data/banjar.json";



import ReactAudioPlayer from 'react-audio-player';


function Map() {
  const [selectedBanjar, setSelectedBanjar] = useState(null);

    return (
        <GoogleMap 
        defaultOptions={{styles: mapStyles}}
        defaultZoom={10} 
        defaultCenter={{lat: -8.403449367266102, lng: 115.1592653203491 }}
        >
                        

        {banjarData.banjar.map((banjar) => (
          <Marker 
          key={banjar.properties.NAME} 
          position={{
            lat: banjar.properties.coordinates[0], 
            lng: banjar.properties.coordinates[1] 
          }}
          onClick={() => {
            setSelectedBanjar(banjar);
          }}

          />   
        
        ))}

        {selectedBanjar && (
          <InfoWindow 
          
          position={{
            lat: selectedBanjar.properties.coordinates[0], 
            lng: selectedBanjar.properties.coordinates[1] 
          }}
          onCloseClick={() => {
            setSelectedBanjar(null);
          }}
          >
              <Fragment>
            <div><h2>{selectedBanjar.properties.NAME}</h2>
                 <p>Ensemble ID: {selectedBanjar.properties.ENSEMBLE_ID}</p> 
                 <p>Kabupaten: {selectedBanjar.properties.KABUPATEN}</p> 
            </div>
            <div>
              <Image src={selectedBanjar.properties.tothPlot} style={{width: "175px;"}} alt="banjar's toth plot" fluid />
            </div>

            <ReactAudioPlayer 
            src={selectedBanjar.properties.audio}
            controls
            onPlay={(e) => console.log("playing audio")}
            />

            
                {/* <AudioPlayer
                    src={selectedBanjar.properties.audio}                    
                    onPlay={(e) => console.log("playing audio")} 
                    // other props here
                    >
                    </AudioPlayer> */}
            </Fragment>
          </InfoWindow>

        )}

        
        
        </GoogleMap>


    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default function MapContainer() {
    return(
        <div style={{ width: "100%", height: "100vh" }} >
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp
            &libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            />
        </div>


    ); 
}