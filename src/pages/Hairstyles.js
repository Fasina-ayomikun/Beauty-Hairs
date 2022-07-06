import React from "react";
import HairstylesInfo from "../components/HairstylesInfo";
import Hero from "../components/Hero";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { heroimages } from "../data/femaledata";

function Hairstyles() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='hair-page'>
        <div className='hair-container'>
          <Hero image={heroimages} title='Explore' />
          <HairstylesInfo />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Hairstyles;
