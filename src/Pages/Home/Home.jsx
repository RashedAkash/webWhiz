import React from 'react';
import Services from '../Services/Services';
import Banner from '../../Components/Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;