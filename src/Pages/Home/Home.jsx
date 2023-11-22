import React from 'react';
import Services from '../Services/Services';
import Banner from '../../Components/Banner/Banner';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;