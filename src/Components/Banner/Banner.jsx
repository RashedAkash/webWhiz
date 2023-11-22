import React from 'react';
import bannerImg from '../../assets/images/banner/banner.png'
import RightTitle from '../../Shared/RightTitle/RightTitle';
import RoudedBtn from '../../Shared/RoudedBtn/RoudedBtn';
import MiddleTitle from '../../Shared/MiddleTitle/MiddleTitle';

const Banner = () => {
  return (
    <div>
      <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=' md:w-1/2'>
              <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
  </div>
    <div className=' md:w-1/2'>
            <div className='text-start'>
              <MiddleTitle first='Turning' second='Imagination' third='into Innovation'/>
      </div>
      <p className="py-6"><RightTitle text="Welcome to my digital playground, where creativity knows no bounds. I'm a passionate designer and developer on a mission to turn innovative ideas into stunning digital realities."/></p>
            <div className=' flex gap-3'>
              <RoudedBtn text='Hire me' />
              <button className='btn rounded-full border border-[#5F90F0]'>View Portfolio</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;