import React from "react";

function Menu() {
  const cards = [
    { img: "/images/carte1.jpg", title: "NOTRE CARTE", description: "Une carte audacieuse et renouvelée régulièrement", position: "left" },
    { img: "/images/carte2.jpg", title: "NOS PAINS", description: "Pains frais maison tous les jours", position: "right" },
    { img: "/images/carte3.jpg", title: "NOTRE SALLE", description: "Une ambiance chaleureuse, conviviale et feutrée.", position: "right" },
    { img: "/images/carte4.jpg", title: "HERBES ET EPICES", description: "Découvertes de nouvelles saveurs assurées !", position: "right" },
    { img: "/images/carte5.jpg", title: "NOTRE SALLE", description: "Vins français, de toutes appellations, spiritueux…", position: "left" }
  ];

  // Fonction pour diviser les cartes en groupes de deux
  const groupCards = (cards, groupSize) => {
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += groupSize) {
      groupedCards.push(cards.slice(i, i + groupSize));
    }
    return groupedCards;
  };

  const groupedCards = groupCards(cards, 2); // Divise les cartes en groupes de deux

  return (
    <div className="d-flex justify-content-center align-items-center vh-200 position-relative mt-5">
      <div className="restau mt-5" id="restau">
        <p className="card-style">La cuisine :</p>
        {groupedCards.map((group, groupIndex) => (
          <div key={groupIndex} className="card-group">
            {group.map((card, index) => (
              <div key={index} className="card-container">
                <img src={card.img} alt={`restau-${index}`} />
                <p className={`text-position ${card.position}`}>{card.title}</p>
                <p className="text-style">{card.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;