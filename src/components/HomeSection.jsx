import React, { useState } from 'react';

const HomeSection = () => {
  // Dynamic content for the home section (could be fetched from an API or managed with state)
  const [content, setContent] = useState({
    heading: "Welcome to Khushi Creations",
    subHeading: "Discover beautiful and intricate mehendi designs for your special moments.",
    imageSrc: "https://img.freepik.com/free-vector/vector-illustration-mehndi-ornament-traditional-indian-style-ornamental-floral-elements-henna-tattoo-stickers-mehndi-yoga-design-cards-prints-abstract-floral-vector-illustration_1217-448.jpg?t=st=1732911356~exp=1732914956~hmac=18c6f39a25e0ae46dbc3b1ba7a19100e821b5eaca859202864142aa9a3ec123b&w=740", // Placeholder image (you can replace it with your own image)
    imageAlt: "Mehendi Design",
  });

  return (
    <section id='home' className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 ">
      {/* Left Side: Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-600">{content.heading}</h1>
        <p className="text-lg text-gray-700">{content.subHeading}</p>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={content.imageSrc}
          alt={content.imageAlt}
          className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HomeSection;
