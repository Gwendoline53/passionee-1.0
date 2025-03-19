import React from "react";

function Image() {
  return (
    // Conteneur principal fluide pour toute la section
    <header className="container-fluid" id="HautDePage">
      
      {/* Section du Logo */}
      <div className="row justify-content my-4">
        {/* Colonne qui ajuste la taille automatiquement selon le contenu */}
        <div className="col">
          {/* Image du logo avec la classe 'img-fluid' pour la rendre responsive */}
          <img src="/images/logo3.webp" alt="Logo du restaurant Passionnée" className="img-fluid" />
        </div>
      </div>

      {/* Section du Titre */}
      <div className="text-center my-4" id="title">
        {/* Titre du restaurant centré horizontalement */}
        <h1>Passionnée</h1>
      </div>

      {/* Section du Sélecteur de langue */}
      <div className="row justify-content my-4">
        {/* Colonne pour le drapeau avec une taille automatique */}
        <div className="drapeau">
          {/* Image du drapeau France, utilisée ici comme sélecteur de langue */}
          <img src="/images/fr.webp" alt="Drapeau France" className="img-fluid" />
        </div>
      </div>

      {/* Section de l'image principale du restaurant */}
      <div className="row justify-content-center my-4">
        {/* Colonne qui prend toute la largeur sur les petits écrans et 10/12 de la largeur sur les écrans moyens */}
        <div className="col-12 col-md-10">
          {/* Image principale du restaurant avec des coins arrondis et responsive */}
          <img src="/images/restau.webp" alt="restaurant Passionnée" className="img-fluid rounded" />
        </div>
      </div>
    </header>
  );
}

export default Image;
