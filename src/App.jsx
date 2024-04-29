import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./Hero/Hero";

import ContactMe from "./ContactMe/ContactMe";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
    <div className="container">
      <Hero />
      <ContactMe />
     </div>
     <Footer />
    </>
  )
}

export default App

