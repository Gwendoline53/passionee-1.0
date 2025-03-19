import React from "react";

function Carte() {
  const openMenuPDF = () => {
    window.open("/images/menu.pdf", "_blank"); // Ouvre le PDF dans un nouvel onglet
  };

  return (
    <div className="carte-container">
      <div className="restau" onClick={openMenuPDF} id="Menu">
        <img 
          src="/images/menurestau.webp" 
          alt="restau" 
        />
      </div> 
    </div>
  );
}

export default Carte;