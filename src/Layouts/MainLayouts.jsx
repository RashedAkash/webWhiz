import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLayouts = () => {
  return (
    <div>
      <div className=' overflow-hidden'>
      <Navbar />
      <Outlet />
      
    </div>
      <div className='  '>
        <Footer />
    </div>
    </div>
  );
};

export default MainLayouts;