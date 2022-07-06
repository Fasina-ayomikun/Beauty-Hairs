import React, { useEffect } from "react";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Trending from "../components/Trending";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Sidebar from "../components/Sidebar";
import { heroimages } from "../data/femaledata";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='home-page'>
        <div className='home-container'>
          <Hero image={heroimages} title='View Styles' />
          <Trending />
          <Blog />
          <Reviews />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
