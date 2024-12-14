import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Footer, GalleryPage, GallerySection, HomeSection, Navbar } from './components';
import { logo, navItems } from "./data/data";


const App = () => {
  return (
    
    // <Router>
    //   <Navbar logo={logo} navItems={navItems} />
    //   <div className="container mx-auto px-6 lg:px-12 p-4">
    //     <Routes>
    //       <Route path="/" element={<HomeSection />} />
    //       <Route path="/gallery" element={<GalleryPage />} />
    //     </Routes>
    //     <HomeSection/>
    //     <GallerySection/>
    //     <About/>
    //     <Contact/>
    //     <Footer/>
    //   </div>
    // </Router>
    <div
    //  style={{
    //   backgroundColor: "#85FFBD",
    //     backgroundImage: "linear-gradient(293deg, #85FFBD 0%, #FFFB7D 100%)",
    //     minHeight: "100vh",
    // }}
    className="min-h-screenb bg-custom-gradient"> {/* Set the background color */}
      <Router>
        <Navbar logo={logo} navItems={navItems} />
        <main className="container mx-auto p-8">
          <HomeSection />
          <GallerySection />
          <About />
          <Contact />
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
