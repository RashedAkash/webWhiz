import React from 'react';
import Title from '../Title/Title';
import star from '../../assets/icon/star.png'
import logo from '../../assets/logo-white.png'
import twitter from '../../assets/icon/Twitter.png'
import telegram from '../../assets/icon/Telegram.png'
import linkedin from '../../assets/icon/Linkedin.png'
import be from '../../assets/icon/Behance.png'
import dribbble from '../../assets/icon/Dribbble.png'
import { Link } from 'react-router-dom';
import { FaGlobe, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import FooterTitle from '../FooterTitle/FooterTitle';

const Footer = () => {
  return (
    <div>
       <div className='bg-[#0E1025] px-5 lg:px-20 pt-7  '>
      <div className=' flex justify-between'>
        <div className=' text-start'>
          <Title title='join us' />
          <div className='flex gap-4 items-center justify-center'>
            <h2 className=' font-bold text-3xl text-white'>Subscribe for newsletter</h2>
            <img src={star} alt="" />
          </div>
        </div>
        <div>

        </div>
</div>
      <footer className="footer py-10 bg-[#0E1025] text-base-content">
  <aside>
    <img src={logo} alt="" />
            <p className=' text-[#808088] text-start'>Customer Feedback Analytic like it was <br /> Supposed to be!</p>
            <h2 className=' relative text-white mt-4'>
              Social Links
              <span className=' absolute bg-[#185AD9] h-[2px] w-7 top-2 right-[-35px]'>

              </span>
            </h2>
            <div className=' flex gap-2'>
               <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={telegram} alt="" />
            <img src={be} alt="" />
            <img src={dribbble} alt="" />
           </div>
  </aside> 
  <nav>
    <header >
<FooterTitle title='Company'/>
            </header> 
    <Link to='/' className="link text-[#949498] link-hover">Home</Link>
    <Link to='/' className="link text-[#949498] link-hover">About Us</Link>
    <Link to='/' className="link text-[#949498] link-hover">Careers</Link>
    <Link to='/' className="link text-[#949498] link-hover">Press</Link>
    
  </nav> 
  <nav>
    <header >
<FooterTitle title='Our services'/>
            </header> 
   <Link to='/' className="link text-[#949498] link-hover">UI/UX Desigin</Link>
    <Link to='/' className="link text-[#949498] link-hover">E-comers</Link>
    <Link to='/' className="link text-[#949498] link-hover">Marketing</Link>
    <Link to='/' className="link text-[#949498] link-hover">Free delivery </Link>
  </nav> 
  <nav>
            <header >
<FooterTitle title='Contact'/>
            </header> 
     <Link to='/' className="link flex items-center gap-2 text-[#949498] link-hover"><FaMailBulk /> alexgoat@gmai.com</Link>
    <Link to='/' className="link text-[#949498] link-hover flex items-center gap-2"><FaPhone /> +880 16096-55707</Link>
    <Link to='/' className="link flex items-center gap-2 text-[#949498] link-hover"><FaLocationArrow /> 221b Baker St London</Link>
    <Link to='/' className="link flex items-center gap-2 text-[#949498] link-hover"><FaGlobe />WebWhiz.com </Link>
  </nav>
      </footer>
     
      <footer className="footer border-t border-[#64656D] footer-center p-4 bg-[#0E1025] text-base-content">
  <aside>
    <p className=' text-[14px] text-[#64656D]'>Copyright 2023 Elearner,Inc NewYork</p>
  </aside>
</footer>
    </div>
   </div>
  );
};

export default Footer;