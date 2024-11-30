import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom"; 
import { Fab } from "@mui/material"; // Import Fab from MUI
import LinkIcon from "@mui/icons-material/Link"; // Use the link icon or any other icon
const Navbar = ({ logo, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   
    <nav className="sticky top-0 z-50 bg-[#a4cf5a] shadow-md text-gray-700">
      <div className="container mx-auto  py-3 flex justify-around items-center">
        {/* Logo */}
        <div className="flex justify-start items-center">
        <NavLink to="/">
            <img
              src={logo} // Use the imported logo here
              alt="Logo"
              className="w-24" // Adjust the size as needed
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.id} // Match the ID of the section
                smooth={true}
                duration={500} // Animation duration in ms
                className="cursor-pointer text-gray-700 hover:text-teal-600 transition duration-300 text-[17px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-[#b6fda3] shadow-md space-y-4 p-4 flex flex-col items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.id} // Match the ID of the section
                smooth={true}
                duration={500}
                className="block cursor-pointer text-gray-700 hover:text-teal-600 transition duration-300 "
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
    
  );
};

export default Navbar;
