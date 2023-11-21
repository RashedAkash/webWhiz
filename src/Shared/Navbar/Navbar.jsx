import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import RoudedBtn from '../RoudedBtn/RoudedBtn';
import logo from '../../assets/logo.png'

const Navbar = () => {
	const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="p-4  dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<NavLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
			<img src={logo} alt="" />
		</NavLink>
		<ul className="items-stretch hidden space-x-3 lg:flex uppercase">
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Home</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/portfolio" className="flex items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Portfolio</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 text-[#64656D] text-[14px] ">About us</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/services" className="flex items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Services</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/testimonial" className="flex items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Testimonials</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Blogs</NavLink>
			</li>
		
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			
			<RoudedBtn text='contact'/>
		</div>
		<button onClick={()=>setOpen(!open)}  className="p-4 lg:hidden">
			<svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-900">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
						{
						open && <div className=' absolute right-5  bg-black'>
							<ul className="items-stretch p-2   space-x-3  uppercase">
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/" className="flex py-2 items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Home</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/portfolio" className="flex pb-2 items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Portfolio</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/about" className="flex pb-2 items-center px-4 -mb-1 text-[#64656D] text-[14px] ">About us</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/services" className="flex pb-2 items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Services</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/testimonial" className="flex pb-2 items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Testimonials</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 text-[#64656D] text-[14px] ">Blogs</NavLink>
			</li>
		
		</ul>
							</div>
						}
					</button>
					
	</div>
</header>
    </div>
  );
};

export default Navbar;