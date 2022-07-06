import React from "react";
import AboutInfo from "../components/AboutInfo";

import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { aboutimages } from "../data/femaledata";
function About() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='about-page'>
        <div className='about-container'>
          <Hero image={aboutimages} title='View Styles' />
          <AboutInfo />
          <Blog />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
