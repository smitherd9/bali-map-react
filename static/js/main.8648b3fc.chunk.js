(this["webpackJsonpbali-gamelan-map"]=this["webpackJsonpbali-gamelan-map"]||[]).push([[0],{148:function(e){e.exports=JSON.parse('{"a":[{"properties":{"NAME":"Peliatan","ENSEMBLE_ID":"01","KABUPATEN":"Gianyar","coordinates":[-8.512,115.2749],"audio":"static/media/peliatan.7645ea89.mp3","tothPlot":"static/media/peliatan-toth-plot.0b75d845.png"}},{"properties":{"NAME":"Getas","ENSEMBLE_ID":"02","KABUPATEN":"Gianyar","coordinates":[-8.552833211627208,115.30626172505409],"audio":"static/media/getas.dd2efab1.mp3","tothPlot":"static/media/getas-toth-plot.c837b3ef.png"}},{"properties":{"NAME":"KOKAR","ENSEMBLE_ID":"03","KABUPATEN":"Gianyar","coordinates":[-8.605494208711733,115.25697201534375],"audio":"static/media/kokar.d58be224.mp3","tothPlot":"static/media/kokar-toth-plot.370b2091.png"}},{"properties":{"NAME":"Banjar Geladag, Pedungan","ENSEMBLE_ID":"04","KABUPATEN":"Kota Denpasar","coordinates":[-8.690221146548055,115.20599715475782],"audio":"static/media/geladag.69f0547a.mp3","tothPlot":"static/media/gladag-toth-plot.a6921d59.png"}},{"properties":{"NAME":"Banjar Dauh Kutuh, Ubung","ENSEMBLE_ID":"05","KABUPATEN":"Kota Denpasar","coordinates":[-8.622762680532373,115.20317446137368],"audio":"static/media/dauh-kutuh-ubung.6b644c3a.mp3","tothPlot":"static/media/dauh-kutuh-ubung-toth-plot.5cff533b.png"}}]}')},158:function(e,t,a){},366:function(e,t,a){"use strict";a.r(t);var s={};a.r(s),a.d(s,"default",(function(){return m}));var r=a(0),i=a(63),l=a.n(i),n=(a(158),a(159),a(37),a(27)),c=a(151),o=a(372),d=a.p+"static/media/bali_mask.74f1fe77.jpg",h=a(1);var p=function(){return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)("div",{className:"menu-icon",children:Object(h.jsx)("i",{className:"fa fa-bars fa-2x"})}),Object(h.jsxs)("div",{className:"logo",children:["BALI GAMELAN MAP",Object(h.jsx)("div",{className:"logo-img",children:Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("img",{className:"mask-logo",src:d})})})]}),Object(h.jsx)("div",{className:"menu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",children:"Contact"})})]})})]})})},j=a(152),b=a(35),m={mapStyles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#c4c4c4"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#707070"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#be2026"},{lightness:"0"},{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{visibility:"off"},{hue:"#ff000a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575757"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"road.local",elementType:"labels.text.stroke",stylers:[{saturation:"-52"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]},u=a(148),g=a(149),y=a.n(g);var x=Object(b.withScriptjs)(Object(b.withGoogleMap)((function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),a=t[0],i=t[1];return Object(h.jsxs)(b.GoogleMap,{defaultOptions:{styles:s},defaultZoom:10,defaultCenter:{lat:-8.403449367266102,lng:115.1592653203491},children:[u.a.map((function(e){return Object(h.jsx)(b.Marker,{position:{lat:e.properties.coordinates[0],lng:e.properties.coordinates[1]},onClick:function(){i(e)}},e.properties.NAME)})),a&&Object(h.jsx)(b.InfoWindow,{position:{lat:a.properties.coordinates[0],lng:a.properties.coordinates[1]},onCloseClick:function(){i(null)},children:Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:a.properties.NAME}),Object(h.jsxs)("p",{children:["Ensemble ID: ",a.properties.ENSEMBLE_ID]}),Object(h.jsxs)("p",{children:["Kabupaten: ",a.properties.KABUPATEN]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:a.properties.tothPlot,style:{width:"175px"},alt:"toth plot",fluid:!0})}),Object(h.jsx)(y.a,{src:a.properties.audio,controls:!0,onPlay:function(e){return console.log("playing audio")}})]})})]})})));function f(){return Object(h.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(h.jsx)(x,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp\n            &libraries=geometry,drawing,places&key=".concat("AIzaSyDRl2dbBZIuJMpJ6x0vU4auu-8z2PuRFHE"),loadingElement:Object(h.jsx)("div",{style:{height:"100%"}}),containerElement:Object(h.jsx)("div",{style:{height:"100%"}}),mapElement:Object(h.jsx)("div",{style:{height:"100%"}})})})}a.p;var O=a.p+"static/media/Nagra-IV-S_2.6753389b.jpg",w=a.p+"static/media/kudelski-slo-resolver.75268b52.jpg",T=a.p+"static/media/hale-sight-o-tuner-1970s.6b33b908.jpg",v=a(367),N=a(368),k=a(369),A=a(370),E=a(371);var S=function(){return Object(h.jsx)("div",{className:"description",children:Object(h.jsxs)(v.a,{fluid:!0,children:[Object(h.jsx)(N.a,{children:Object(h.jsxs)(k.a,{xs:12,className:"nagra nagra-main",children:[Object(h.jsx)("h2",{className:"main-text",children:"In 1976, the ethnomusicologist Andrew Toth measured the tunings of each bronze key and gong-kettle of 49 complete sets of gong keybar."}),Object(h.jsx)("div",{})]})}),Object(h.jsxs)(N.a,{children:[Object(h.jsx)(k.a,{xs:12,md:8,className:"nagra text-col-nagra",children:Object(h.jsxs)("p",{className:"text-p-nagra",children:['His notes state, "The tunings of approximately half of them were measured live, while the others were recorded on a',Object(h.jsxs)("a",{href:"https://www.redsharknews.com/audio/item/6347-one-audio-recorder-to-rule-them-all-a-look-back-at-the-nagra-iv",target:"_blank",rel:"noreferrer",children:[" ","Nagra-IV-S tape recorder"]})," ","(",Object(h.jsx)("em",{children:"pictured at right"}),') with crystal synchronization pulse. The tapes were later played back at correct speed by using a Kudelski Slo Resolver. In both instances, the measurements were made with the Hale-Sight-o-Tuner, a Stroboconn-type device which is solid state, portable and accurate to +/- 0.5 cent. All pitch measurements were made in terms of deviation from Western equal temperament, with the octave defined as 1200 cents and the half step as 100 cents."']})}),Object(h.jsx)(k.a,{xs:12,md:4,className:"nagra",children:Object(h.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[Object(h.jsx)("img",{src:O,style:{width:"75%",border:"1px solid black"},alt:"Nagra IV-S"}),Object(h.jsx)("p",{children:Object(h.jsx)("em",{children:"Nagra IV-S"})})]})})]}),Object(h.jsxs)(N.a,{children:[Object(h.jsxs)(k.a,{xs:12,md:4,className:"nagra",children:[Object(h.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[Object(h.jsx)("img",{src:w,style:{width:"75%",border:"1px solid black"},alt:"Kudelski Slo Resolver"}),Object(h.jsx)("p",{children:Object(h.jsx)("em",{children:"Kudelski Slo Resolver"})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[Object(h.jsx)("img",{src:T,style:{width:"75%",border:"1px solid black"},alt:"Hale Sight-o-Tuner 1970s"}),Object(h.jsx)("p",{children:Object(h.jsx)("em",{children:"Hale Sight-o-Tuner (1970s)"})})]})]}),Object(h.jsxs)(k.a,{xs:12,md:8,className:"nagra text-col-nagra",children:[Object(h.jsxs)("p",{className:"text-p-nagra",children:['His meticulously gathered data has been stored in the special collections at Wesleyan University Library which includes seven boxes of "his letters, photographs, concert notices, course notes, and computer printouts of tuning frequencies',Object(h.jsx)("sup",{children:Object(h.jsx)("a",{href:"#citation1",children:"1"})}),'."']}),Object(h.jsxs)("p",{className:"text-p-nagra",children:["This project uses Toth's handwritten notes for each key in each gamelan. That data was then put into\xa0",Object(h.jsx)("a",{href:"https://www.soniccouture.com/en/products/31-ethnic/g26-balinese-gamelan-ii/",target:"_blank",rel:"noreferrer",children:"Soniccouture's Balinese Gamelan II VST"}),", which was created by sampling the gamelan semaradana belonging to the London Symphony Orchestra."]}),Object(h.jsx)("p",{className:"text-p-nagra",children:"You may notice that not all instruments are present in all the audio clips.  This is because (as far as I know) data for those instruments was not available, either because Andrew Toth did not record the data or that particular ensemble did not have those instruments in the late 70s.  Similarly, you may hear more instruments as some gamelan had penyacah, some didn't, and some had two pairs of pemade/kantil while others only had one."}),Object(h.jsxs)("p",{className:"text-p-nagra",children:["It is hoped that this will allow the listener a glimpse into the wildly diverse and beautiful world of Balinese tuning preferences (",Object(h.jsx)("em",{children:"from your own home!"}),") by hearing samples of pieces played on different gamelan."]}),Object(h.jsx)("p",{id:"citation1",className:"citation",children:Object(h.jsxs)("em",{children:["1. Vitale, Wayne and Sethares, Bill, 2021. \u201cBalinese Gamelan Tuning: The Toth Archives,\u201d to appear in\xa0",Object(h.jsx)("a",{href:"http://www.aawmjournal.com/",target:"_blank",rel:"noreferrer",children:"Analytical Approaches to World Music"}),"."]})})]})]}),Object(h.jsx)(N.a,{children:Object(h.jsxs)(k.a,{xs:12,className:"nagra",children:[Object(h.jsx)("h2",{className:"main-text",children:"Click on a pin on the map below and you'll see information about which banjar you are listening to, which district (kabupaten) it is located in and the ensemble ID in Andrew Toth's data."}),Object(h.jsxs)("p",{className:"small-description",children:["Currently, only a short section of a piece called Kosalia Arini is playable, but this will change as I work through the tedious process of mastering the art of tukang laras digital. In short... ",Object(h.jsx)("br",{}),Object(h.jsx)("em",{children:"STAY TUNED!"})]})]})}),Object(h.jsx)(N.a,{children:Object(h.jsx)(k.a,{xs:12,children:Object(h.jsxs)(A.a,{className:"kab-buttons",children:[Object(h.jsx)(E.a,{variant:"primary",size:"lg",active:!0,children:"Badung"}),Object(h.jsx)(E.a,{variant:"primary",size:"lg",active:!0,children:"Gianyar"}),Object(h.jsx)(E.a,{variant:"primary",size:"lg",active:!0,children:"Denpasar"})]})})})]})})},I=a(36),B=a(150),M=a.p+"static/media/barong-logo.5130e27c.png";var P=function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)(v.a,{fluid:!0,children:Object(h.jsx)(N.a,{children:Object(h.jsxs)(k.a,{lg:12,className:"footer-col",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:M,style:{width:"100px",height:"100px"},alt:"barong logo"})}),Object(h.jsxs)("div",{className:"footer-social-div",children:[Object(h.jsx)("span",{className:"footer-social-icons",children:Object(h.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(I.a,{icon:["fab","facebook-square"],className:"fa-2x"})})}),Object(h.jsx)("span",{className:"footer-social-icons",children:Object(h.jsx)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(I.a,{icon:["fab","twitter-square"],className:"fa-2x"})})}),Object(h.jsx)("span",{className:"footer-social-icons",children:Object(h.jsx)("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(I.a,{icon:["fab","linkedin-in"],className:"fa-2x"})})}),Object(h.jsx)("span",{className:"footer-social-icons",children:Object(h.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(I.a,{icon:["fab","instagram"],className:"fa-2x"})})})]}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"https://smitherd9.github.io",target:"_blank",rel:"noreferrer",children:Object(h.jsxs)("span",{style:{color:"#fff"},children:[Object(h.jsx)(I.a,{icon:B.a})," 2021 Daniel Smither"]})})})]})})})})};a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p;n.b.add(c.a);var D=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"contentContainer",children:[Object(h.jsx)(p,{}),Object(h.jsx)(S,{}),Object(h.jsx)(f,{})]}),Object(h.jsx)(P,{})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,373)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),s(e),r(e),i(e),l(e)}))};l.a.render(Object(h.jsx)(D,{}),document.getElementById("root")),K()},37:function(e,t,a){}},[[366,1,2]]]);
//# sourceMappingURL=main.8648b3fc.chunk.js.map