import React, { useState } from 'react';

function Reservation() {
  // Déclaration de l'état pour chaque champ du formulaire
  // useState initialise un objet formData avec des valeurs vides
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    adults: '',
    children: '',
    meal: '',
    arrival: '',
    email: '',
    phone: '',
    message: '',
  });

  // Fonction pour gérer les changements d'input
  // Cette fonction est appelée chaque fois qu'un champ du formulaire change
  const handleChange = (e) => {
    const { name, value } = e.target; // On récupère le nom et la valeur de l'input modifié
    setFormData({
      ...formData, // Copie de l'objet formData actuel
      [name]: value, // On met à jour la valeur du champ modifié
    });
  };

  // Fonction pour gérer la soumission du formulaire
  // Cette fonction est appelée lorsqu'on clique sur le bouton de soumission
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    // Ici, vous pouvez effectuer des vérifications ou envoyer les données à un serveur
    console.log('Form Data Submitted: ', formData); // Affiche les données du formulaire dans la console
    // Réinitialiser le formulaire après soumission en réinitialisant l'état à ses valeurs initiales
    setFormData({
      date: '',
      name: '',
      adults: '',
      children: '',
      meal: '',
      arrival: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="container mt-5" id="bgform">
      <h2 className="text-center mb-4">DEMANDE DE RÉSERVATION</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Champ pour la date de réservation */}
        <div className="col-md-6">
          <label htmlFor="date" className="form-label">Date :</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date} // Lier l'input à l'état formData
            onChange={handleChange} // Appel de la fonction handleChange lors d'une modification
            required
          />
        </div>

        {/* Champ pour le nom et prénom */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Nom et prénom :</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom et prénom"
            required
          />
        </div>

        {/* Champ pour le nombre d'adultes */}
        <div className="col-md-6">
          <label htmlFor="adults" className="form-label">Nombre d'adultes :</label>
          <input
            type="number"
            className="form-control"
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            placeholder="Adulte(s)"
            required
          />
        </div>

        {/* Champ pour le nombre d'enfants */}
        <div className="col-md-6">
          <label htmlFor="children" className="form-label">Nombre d'enfants :</label>
          <input
            type="number"
            className="form-control"
            id="children"
            name="children"
            value={formData.children}
            onChange={handleChange}
            placeholder="Enfant(s)"
            required
          />
        </div>

        {/* Champ pour spécifier les repas */}
        <div className="col-md-6">
          <label htmlFor="meal" className="form-label">Repas :</label>
          <input
            type="text"
            className="form-control"
            id="meal"
            name="meal"
            value={formData.meal}
            onChange={handleChange}
            placeholder="Repas (Déjeuner, Dîner, etc.)"
            required
          />
        </div>

        {/* Champ pour l'heure d'arrivée */}
        <div className="col-md-6">
          <label htmlFor="arrival" className="form-label">Heure d'arrivée :</label>
          <input
            type="time"
            className="form-control"
            id="arrival"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            placeholder="Heure d'arrivée"
            required
          />
        </div>

        {/* Champ pour l'email */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email :</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Emails/courriel"
            required
          />
        </div>

        {/* Champ pour le téléphone */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Téléphone :</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Téléphone"
            required
          />
        </div>

        {/* Champ pour le message */}
        <div className="col-12">
          <label htmlFor="message" className="form-label">Votre message :</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Votre message, en précisant les intolérances alimentaires, allergies ou régimes particuliers."
            required
          ></textarea>
        </div>

        {/* Bouton de soumission du formulaire */}
        <div className="col-3 mx-auto">
          <button type="submit" className="btn btn-primary w-100">
            Soumettre la demande
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reservation;
