import React from "react";
import Image from "./image";  // Importation du composant Image (le header)
import Navbar from "./navbar";
import Carousel from "./carousel";
import Chef from "./chef";
import Menu from "./pages/menu";
import Carte from "./pages/carte";
import Reservation from "./pages/reservation";
import Map from "./pages/map";
import ContactInfo from "./ContactInfo";

function Home() {
    return (
        <div>
            <Navbar/>
            <Image />  {/* Affichage du haut de page */}
            <Carousel/>{/* D'autres contenus ou composants peuvent être ajoutés ici */}
            <Chef/>
            <Menu/>
            <Carte/>
            <Reservation/>
            <Map/>
            <ContactInfo/>
        </div>
    );
}

export default Home;
