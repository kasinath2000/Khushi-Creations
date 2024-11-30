// import React from "react";
// import { Facebook, Instagram, Twitter } from "@mui/icons-material"; // Material UI Icons
// import { NavLink } from "react-router-dom"; 
// import logo from '../assets/image/logo.png';
// import Drawer from '../utils/Drawer';

// const Footer = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false); // State to control the drawer

//   const handleDrawerOpen = (e) => {
//     e.preventDefault(); // Prevent default navigation behavior
//     setDrawerOpen(true); // Open the drawer
//   };

//   const handleDrawerClose = () => setDrawerOpen(false); // Close the drawer

//   // Social media links (dynamic)
//   const socialLinks = [
//     { name: "Facebook", icon: <Facebook fontSize="small" />, url: "https://www.facebook.com/profile.php?id=100086646060216" },
//     { name: "Instagram", icon: <Instagram fontSize="small" />, url: "https://www.instagram.com/art_by_khushi.m?igsh=YTV2Z2xmMGdldW1u" },
//   ];

//   return (
//     <footer className="bg-teal-700 text-white py-6">
//       <div className="container mx-auto px-4 text-center md:text-left">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
//           {/* Left Side: Logo */}
//           <div className="flex justify-center md:justify-start items-center space-x-4">
//             <img
//               src={logo} // Replace with your logo URL
//               alt="Mehendi Art Logo"
//               className="w-32"
//             />
//           </div>

//           {/* Center: Privacy Policy Link */}
//           <div className="flex justify-center items-center">
//             <NavLink
//               to="/privacy-policy" // Internal navigation to Privacy Policy page
//               className="text-lg text-teal-300 hover:text-teal-200"
//               onClick={handleDrawerOpen}
//             >
//               Privacy Policy
//             </NavLink>
//           </div>

//           {/* Right Side: Dynamic Social Media Icons */}
//           <div className="flex justify-center md:justify-end space-x-4">
//             {socialLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-teal-300"
//                 aria-label={link.name}
//               >
//                 {link.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Developer Info */}
//         <div className="mt-8 border-t border-teal-500 pt-2">
//           <p className="text-sm text-center">
//             &copy; {new Date().getFullYear()} Khushi Creations. All Rights Reserved.
//           </p>
//           <div className="text-center mt-2">
//             <NavLink
//               to="https://my-portfolio-iota-three-82.vercel.app/" // External link
//               className="text-teal-300 hover:text-teal-200"
//               target="_blank"
//             >
//               Developer: Kasinath M.
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState } from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material"; // Material UI Icons
import { NavLink } from "react-router-dom"; 
import logo from '../assets/image/logo.png';
import Drawer from '../utils/Drawer'; // Import the Drawer component
import PrivacyPolicy from '../pages/PrivacyPolicy'; // Import PrivacyPolicy component

const Footer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control the drawer
  const handleDrawerOpen = (e) => {
    e.preventDefault(); // Prevent default navigation behavior
    setDrawerOpen(true); // Open the drawer
  };

  const handleDrawerClose = () => setDrawerOpen(false); // Close the drawer

  // Social media links (dynamic)
  const socialLinks = [
    { name: "Facebook", icon: <Facebook fontSize="small" />, url: "https://www.facebook.com/profile.php?id=100086646060216" },
    { name: "Instagram", icon: <Instagram fontSize="small" />, url: "https://www.instagram.com/art_by_khushi.m?igsh=YTV2Z2xmMGdldW1u" },
    { name: "Twitter", icon: <Twitter fontSize="small" />, url: "https://twitter.com/yourprofile" } // Example Twitter link
  ];

  return (
    <>
      <footer className="bg-teal-700 text-white py-6">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            {/* Left Side: Logo */}
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <img
                src={logo} // Replace with your logo URL
                alt="Mehendi Art Logo"
                className="w-32"
              />
            </div>

            {/* Center: Privacy Policy Link */}
            <div className="flex justify-center items-center">
              <a
                href="#privacy-policy" // Using anchor tag to open the privacy policy in the drawer
                className="text-lg text-teal-300 hover:text-teal-200"
                onClick={handleDrawerOpen} // Open the drawer on click
              >
                Privacy Policy
              </a>
            </div>

            {/* Right Side: Dynamic Social Media Icons */}
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Developer Info */}
          <div className="mt-8 border-t border-teal-500 pt-2">
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} Khushi Creations. All Rights Reserved.
            </p>
            <div className="text-center mt-2">
              <NavLink
                to="https://my-portfolio-iota-three-82.vercel.app/" // External link
                className="text-teal-300 hover:text-teal-200"
                target="_blank"
              >
                Developer: Kasinath M.
              </NavLink>
            </div>
          </div>
        </div>
      </footer>

      {/* Drawer Component for Privacy Policy */}
      <Drawer open={drawerOpen} onClose={handleDrawerClose}>
        <PrivacyPolicy />
      </Drawer>
    </>
  );
};

export default Footer;
