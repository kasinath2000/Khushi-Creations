import React from 'react';
import { Facebook, Instagram } from '@mui/icons-material'; // Import MUI icons
import { Link } from 'react-router-dom'; // Import Link for client-side routing

const ContactSection = () => {
  const contactInfo = {
    email: 'artistemail@example.com',
    phone: '+91 9732 2034057',
    address: 'Ranibandh, Bankura, WB, 722148',
    socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=100086646060216',
      instagram: 'https://www.instagram.com/art_by_khushi.m?igsh=YTV2Z2xmMGdldW1u',
    }}
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-teal-600">Contact Us</h1>
        <p className="text-xl text-gray-700">
          Have any questions or inquiries? Feel free to get in touch.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Left Side: Contact Information */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-2xl font-semibold text-teal-600">Contact Information</h2>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> {contactInfo.email}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> {contactInfo.phone}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Address:</strong> {contactInfo.address}
          </p>
          
          {/* Social Media Icons */}
          <div className="space-x-4 mt-4">
            {contactInfo.socialLinks.facebook && (
              <Link
                to={contactInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-teal-600 text-3xl"
              >
                <Facebook fontSize="inherit" />
              </Link>
            )}
            {contactInfo.socialLinks.instagram && (
              <Link
                to={contactInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-teal-600 text-3xl"
              >
                <Instagram fontSize="inherit" />
              </Link>
            )}
          </div>
        </div>

        {/* Right Side: Contact Message */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-teal-600 text-center md:text-left">Get in Touch</h2>
          <p className="text-lg text-gray-700 mt-4">
            If you have any questions or would like to book a mehndi session, feel free to reach out to us via the contact details above. We will get back to you as soon as possible!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
