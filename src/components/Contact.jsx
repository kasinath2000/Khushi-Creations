import React, { useState } from "react";

const Contact = () => {
  // State for form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for form submission status
  const [status, setStatus] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission (you can integrate with an actual API later)
    setStatus("Thank you for reaching out! We will get back to you shortly.");
    
    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16 ">
      {/* Heading */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold text-teal-600">Contact Us</h1>
        <p className="text-lg text-gray-700">
          Have any questions or inquiries? Feel free to get in touch.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Left Side: Contact Information */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-2xl font-semibold text-teal-600">Contact Information</h2>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> artistemail@example.com
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-lg text-gray-700">
            <strong>Address:</strong> 123 Mehendi Street, Art City, Country
          </p>
          <div className="space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600">
              Twitter
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-teal-600 text-center md:text-left">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="6"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-center text-green-600">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
