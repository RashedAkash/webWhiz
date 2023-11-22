import React from 'react';
import bannerImg from '../../assets/images/banner/banner.png'
import RightTitle from '../../Shared/RightTitle/RightTitle';
import RoudedBtn from '../../Shared/RoudedBtn/RoudedBtn';
import MiddleTitle from '../../Shared/MiddleTitle/MiddleTitle';
import Container from '../../Shared/Container/Container';
import './banner.css'
import roundImg from '../../assets/images/banner/round.png';
import ellips from '../../assets/images/banner/Ellipse 2.png'

const Banner = () => {
  return (
    <div>
      <div className="  ">
        <Container>
          <div className=" py-10  flex-col gap-7 md:flex md:flex-row-reverse justify-between">
          <div className='banner-bg relative   md:w-1/2'>
              <img src={bannerImg} />
              <img className=' absolute -top-8 right-40 ' src={roundImg} alt="" />
              <img src={ellips} className=' absolute left-0 right-0 mx-auto -bottom-3 ' alt="" />
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
  </Container>
</div>
    </div>
  );
};

export default Banner;