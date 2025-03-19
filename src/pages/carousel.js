import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import du CSS de Bootstrap

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = new window.bootstrap.Carousel(carouselRef.current, {
        interval: 2000, // Intervalle entre les diapositives (en ms)
        ride: 'carousel', // Défilement automatique
      });
    }
  }, []);

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Notre Carte :</h1>
      <div
        id="imageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        ref={carouselRef}
      >
        <div className="carousel-inner">
          {/* Premier élément du carousel (actif) */}
          <div className="carousel-item active">
            <div className="carousel-image-container">
              <img
                src="/images/menu1.webp"
                alt="First slide"
                className="carousel-image"
              />
              <img
                src="/images/menu2.webp"
                alt="Second slide"
                className="carousel-image"
              />
              <img
                src="/images/menu3.webp"
                alt="Third slide"
                className="carousel-image"
              />
            </div>
          </div>

          {/* Deuxième élément du carousel */}
          <div className="carousel-item">
            <div className="carousel-image-container">
              <img
                src="/images/menu4.webp"
                alt="Fourth slide"
                className="carousel-image"
              />
              <img
                src="/images/menu5.webp"
                alt="Fifth slide"
                className="carousel-image"
              />
              <img
                src="/images/menu6.jpg"
                alt="Sixth slide"
                className="carousel-image"
              />
            </div>
          </div>

          {/* Troisième élément du carousel */}
          <div className="carousel-item">
            <div className="carousel-image-container">
              <img
                src="/images/menu7.jpg"
                alt="Seventh slide"
                className="carousel-image"
              />
              <img
                src="/images/menu8.jpg"
                alt="Eighth slide"
                className="carousel-image"
              />
              <img
                src="/images/menu9.jpg"
                alt="Ninth slide"
                className="carousel-image"
              />
            </div>
          </div>
        </div>

        {/* Boutons de contrôle du carousel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;