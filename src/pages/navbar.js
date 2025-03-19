import React from "react";
import { Link } from "react-scroll";

const NavbarItems = [
  { id: 'HautDePage', label: <img 
    src="/images/logo3.webp" 
    alt="" 
    width="50" 
    height="50" 
    className="logo" // Ajout de la classe CSS
  /> },
  { id: 'Chef', label: 'Chef' },
  { id: 'restau', label: 'Cuisine' },
  { id: 'Menu', label: 'Menu' },
  { id: 'bgform', label: 'Reservation'},
  { id: 'contacts', label: 'Contacts' },
];

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Utilisation de la classe CSS */}
      <ul className="navList"> {/* Utilisation de la classe CSS */}
        {NavbarItems.map(({ id, label }) => (
          <li key={id} className="navItem"> {/* Utilisation de la classe CSS */}
            <Link
              to={id}
              spy={true} // Navigation active
              smooth={true} // Smooth scroll
              duration={500} // Transition duration
              offset={-70} // Offset for better visibility
              className="navLink" // Utilisation de la classe CSS
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;