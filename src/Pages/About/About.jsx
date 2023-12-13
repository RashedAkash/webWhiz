import React from 'react';
import Title from '../../Shared/Title/Title';
import LastTitle from '../../Shared/LastTitle/LastTitle';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import aboutImg from '../../assets/team.jpeg'
import Container from '../../Shared/Container/Container';

const About = () => {
  return (
    <div className=' py-16'>
      <div className=' md:flex items-center justify-between'>
        <div className='md:w-1/2 text-left'>
        <Title title='About us'/>
        <LastTitle first='I am JavaScript ' second='Developer'/>
      </div>
      <div className='md:w-1/2'>
        <RightTitle text="Hello! I am Rashed Hossain. a passionate web developer who loves creating captivating experiences on the internet. My journey into web development began in 2023.I believe in the power of the web to connect people and create meaningful interactions. With a keen eye for detail and a commitment to user-centric design, I strive to deliver exceptional web solutions that leave a lasting impact. Lets collaborate and turn your ideas into remarkable digital experiences!" />
      </div>
      </div>
      <Container>
        <div className='md:flex justify-between gap-8 pt-12'>
        <div className=' md:w-1/2 bg-[#f2f3f5fc] p-12 rounded-2xl'>
          <div className='flex flex-col'>
            <label className=' text-left text-[#130929] font-semibold '>Node js</label><br />
             <Progress className='w-full'
              percent={65}
              theme={
                {
                  default: {
                    color: 'blue'
                  }
                }
              }
/>
         </div>
          <div className='flex flex-col'>
            <label className=' text-left text-[#130929] font-semibold  '>React js</label><br />
             <Progress className='w-full'
              percent={75}
              theme={
                {
                  default: {
                    color: 'blue'
                  }
                }
              }
/>
         </div>
          <div className='flex flex-col'>
            <label className=' text-left text-[#130929] font-semibold  '>Next js</label><br />
             <Progress className='w-full'
              percent={45}
              theme={
                {
                  default: {
                    color: 'blue'
                  }
                }
              }
/>
         </div>
          <div className='flex flex-col'>
            <label className=' text-left text-[#130929] font-semibold '>JavaScript</label><br />
             <Progress className='w-full'
              percent={87}
              theme={
                {
                  default: {
                    color: 'blue'
                  }
                }
              }
/>
         </div>      


        </div>
        <div className='md:w-1/2 relative'>
            <img className=' rounded-2xl' src={aboutImg} alt="" />
            <div className=' absolute lg:-right-10 lg:bottom-0 flex justify-around bg-gradient-to-r from-[#5F90F0] to-[#185AD9] p-8 rounded-2xl'>
              <div className=' border-r lg:px-8'>
                <h2 className=' text-white font-bold text-2xl'>10+</h2>
                <p className='text-[#FFFFFFCC]'>Project Delivery</p>
              </div>
              <div className=' border-r lg:px-8'>
                <h2 className=' text-white font-bold text-2xl'>5+</h2>
                <p className='text-[#FFFFFFCC]'>Happy Clients</p>
              </div>
              <div className='lg:pl-8 '>
                <h2 className=' text-white font-bold text-2xl'>1+</h2>
                <p className='text-[#FFFFFFCC]'> Experience</p>
              </div>
            </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default About;