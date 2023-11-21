import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
  return (
    <div className=' max-w-[1140px] mx-auto overflow-hidden'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;