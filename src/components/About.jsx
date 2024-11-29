import React from 'react';

const AboutSection = () => {
  // Dynamic artist details
  const artistDetails = {
    name: "Priyanka Mandal",
    profession: "Mehendi Artist",
    bio: "I am a passionate Mehendi artist specializing in intricate and traditional designs. I create unique, personalized Mehendi art that reflects your special moments. Whether it's for a wedding, festival, or any other occasion, I ensure every design is perfect and filled with creativity.",
    imageSrc: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1732912492~exp=1732916092~hmac=9c84a61de1065a46493aa8858f2cbce1ee4e7db3cb86ef56d8c6c3a239cd3eab&w=740"||"https://via.placeholder.com/500", // Replace with the actual artist's image URL
    imageAlt: "Artist Profile Picture",
  };

  return (
    <section className="container mx-auto px-4 py-16 ">
      {/* Heading and Subheading */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold text-teal-600">About Artist</h1>
        <p className="text-lg text-gray-700">
          Bringing traditional and contemporary Mehendi designs to life for your special moments.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Left Side: Artist Bio */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-teal-600">{artistDetails.name}</h2>
          <h3 className="text-xl font-semibold text-gray-700">{artistDetails.profession}</h3>
          <p className="text-lg text-gray-700">{artistDetails.bio}</p>
        </div>

        {/* Right Side: Artist Avatar Image */}
        <div className="md:w-1/2 flex justify-center">
          <div
            className="w-64 h-64 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-teal-600"
            style={{ overflow: "hidden" }}
          >
            <img
              src={artistDetails.imageSrc}
              alt={artistDetails.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
