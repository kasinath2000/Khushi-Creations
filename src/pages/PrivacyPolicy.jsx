
import React from "react";

const PrivacyPolicy = () => {


  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back Button
      <button
        onClick={handleBackClick} // Call the handleBackClick function on click
        className="text-teal-500 hover:text-teal-400 mb-4"
      >
        &larr; Back to Home
      </button> */}

      <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">Privacy Policy</h1>
      
      <p className="text-lg text-gray-700 mb-4">
        At Mehendi Art, we value your privacy. This Privacy Policy document outlines the types of personal data that is collected and how it is used.
      </p>
      
      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-4">1. Information We Collect</h2>
      <p className="text-lg text-gray-700 mb-4">
        We collect personal information when you contact us or make a booking request, such as your name, email address, and phone number. We do not collect sensitive financial information as payments are handled through third-party services.
      </p>
      
      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-4">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 text-lg text-gray-700 mb-4">
        <li>Communicate with you regarding inquiries and bookings.</li>
        <li>Provide a personalized service experience.</li>
        <li>Analyze usage data to improve our services.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-4">3. Data Security</h2>
      <details className="text-lg text-gray-700 mb-4">
        <summary className="cursor-pointer text-teal-500">
          Click to view more about our data security measures
        </summary>
        <p>
          We take reasonable precautions to protect your data, including encryption and secure storage practices. However, no data transmission method is 100% secure, and we cannot guarantee the absolute security of your personal information.
        </p>
      </details>

      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-4">4. Changes to This Privacy Policy</h2>
      <p className="text-lg text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-4">5. Contact Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        If you have any questions about this Privacy Policy, feel free to contact us via our <a href="/contact" className="text-teal-500">Contact Page</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
