// import React, { useState } from 'react';

// const HomeSection = () => {
//   // Dynamic content for the home section (could be fetched from an API or managed with state)
//   const [content, setContent] = useState({
//     heading: "Welcome to Khushi Creations",
//     subHeading: "Discover beautiful and intricate mehendi designs for your special moments.",
//     imageSrc: "https://img.freepik.com/free-vector/vector-illustration-mehndi-ornament-traditional-indian-style-ornamental-floral-elements-henna-tattoo-stickers-mehndi-yoga-design-cards-prints-abstract-floral-vector-illustration_1217-448.jpg?t=st=1732911356~exp=1732914956~hmac=18c6f39a25e0ae46dbc3b1ba7a19100e821b5eaca859202864142aa9a3ec123b&w=740", // Placeholder image (you can replace it with your own image)
//     imageAlt: "Mehendi Design",
//   });

//   return (
//     <section id='home' className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 ">
//       {/* Left Side: Text */}
//       <div className="md:w-1/2 text-center md:text-left space-y-6">
//         <h1 className="text-3xl md:text-4xl font-bold text-teal-600">{content.heading}</h1>
//         <p className="text-lg text-gray-700">{content.subHeading}</p>
//       </div>

//       {/* Right Side: Image */}
//       <div className="md:w-1/2 flex justify-center">
//         <img
//           src={content.imageSrc}
//           alt={content.imageAlt}
//           className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
//         />
//       </div>
//     </section>
//   );
// };

// export default HomeSection;

import React, { useState, useEffect } from 'react';
import bgimg from '../assets/image/bg.png'
import bgimg2 from '../assets/image/bg2.png'
import bgimg3 from '../assets/image/bg3.jpg'
const HomeSection = () => {
  const [content, setContent] = useState({
    heading: "Welcome to Khushi Creations",
    subHeading: "Discover beautiful and intricate mehendi designs for your special moments.",
    images: [bgimg,bgimg2,bgimg3
      // "https://img.freepik.com/free-vector/vector-illustration-mehndi-ornament-traditional-indian-style-ornamental-floral-elements-henna-tattoo-stickers-mehndi-yoga-design-cards-prints-abstract-floral-vector-illustration_1217-448.jpg",
      // "https://img.freepik.com/free-vector/hand-drawn-mehndi-design_23-2149977634.jpg",
      // "https://img.freepik.com/free-vector/hand-drawn-mehndi-pattern-background_23-2149989110.jpg",
    ],
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === content.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [content.images.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Image Slider */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={content.images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Gradient from bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#a4cf5a]/70 to-transparent"></div>
      </div>

      {/* Text Content Inside Gradient */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          {content.heading}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white opacity-90">
          {content.subHeading}
        </p>
        {/* <button className="mt-6 px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-lg transition-transform transform hover:scale-105">
          Explore More
        </button> */}
      </div>
    </section>
  );
};

export default HomeSection;
