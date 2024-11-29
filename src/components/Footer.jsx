import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material"; // Material UI Icons
import { NavLink } from "react-router-dom"; 
import logo from '../assets/image/logo.png'

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-6 ">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side: Logo */}
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <img
              src={logo}// Replace with your logo URL
              alt="Mehendi Art Logo"
              className="w-32"
            />
            {/* <span className="text-2xl font-semibold text-white">Mehendi Art</span> */}
          </div>

          {/* Center: Privacy Policy Link */}
          <div className="flex justify-center items-center">
            <NavLink
              to="/privacy-policy" // Internal navigation to Privacy Policy page
              className="text-lg text-teal-300 hover:text-teal-200"
            >
              Privacy Policy
            </NavLink>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <Facebook fontSize="small" className="text-white hover:text-teal-300" />
            <Instagram fontSize="small" className="text-white hover:text-teal-300" />
            <Twitter fontSize="small" className="text-white hover:text-teal-300" />
          </div>
        </div>

        {/* Developer Info */}
        <div className="mt-8 border-t border-teal-500 pt-2">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Khushi Creations. All Rights Reserved.
          </p>
          <div className="text-center mt-2">
            <NavLink
              to="https://my-portfolio-iota-three-82.vercel.app/" // External link using NavLink (not recommended)
              className="text-teal-300 hover:text-teal-200"
              target="_blank"
            >
              Developer: Kasinath M.
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
