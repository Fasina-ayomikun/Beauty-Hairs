import React from "react";
import Hero from "../components/Hero";
import StaffsInfo from "../components/StaffsInfo";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { aboutimages } from "../data/femaledata";

function Staffs() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='staffs-page'>
        <div className='staffs-container'>
          <Hero image={aboutimages} title='View Styles' />
          <StaffsInfo />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Staffs;
