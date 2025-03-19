import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import du CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import du JavaScript de Bootstrap
import Navbar from "./pages/navbar";
import Image from "./pages/image";
import Carousel from "./pages/carousel";
import Chef from "./pages/chef";
import Menu from "./pages/menu";
import Carte from "./pages/carte";
import Reservation from "./pages/reservation";
import Map from "./pages/map";
import ContactInfo from "./pages/ContactInfo";
import './App.css'; // Import du fichier CSS


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Image />
      <Carousel/>
      <Chef/>
      <Menu/>
      <Carte/>
      <Reservation/>
      <Map/>
      <ContactInfo/>
      
    </div>
  );
}

export default App;
