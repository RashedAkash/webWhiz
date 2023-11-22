import React from 'react';
import Title from '../../Shared/Title/Title';
import LastTitle from '../../Shared/LastTitle/LastTitle';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const About = () => {
  return (
    <div>
      <div className=' md:flex items-center justify-between'>
        <div className='md:w-1/2 text-left'>
        <Title title='About us'/>
        <LastTitle first='We are turning products into' second='Timeless elegance'/>
      </div>
      <div className='md:w-1/2'>
        <RightTitle text="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity." />
      </div>
      </div>
      <div className='flex'>
        <div className=' w-full bg-[#f2f3f5fc] p-12'>
          <div className='flex flex-col'>
            <label className=' text-left text-[#130929] font-semibold '>Graphic Design</label><br />
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
            <label className=' text-left text-[#130929] font-semibold  '>Product Design</label><br />
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
            <label className=' text-left text-[#130929] font-semibold  '>UI/UX design</label><br />
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
            <label className=' text-left text-[#130929] font-semibold '>Lead Generation</label><br />
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
        <div>

        </div>
      </div>
    </div>
  );
};

export default About;