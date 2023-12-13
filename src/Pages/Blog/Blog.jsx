import React from 'react';
import Container from '../../Shared/Container/Container';
import Title from '../../Shared/Title/Title';
import MiddleTitle from '../../Shared/MiddleTitle/MiddleTitle';
import blog from '../../assets/test.jpg'
import LastTitle from '../../Shared/LastTitle/LastTitle';
import RightTitle from '../../Shared/RightTitle/RightTitle';


const Blog = () => {
  return (
    <Container>
      <div className="hero ">
  <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className=' md:w-1/2'>
            <img src={blog} className=' w-full rounded-2xl' />
    </div>
    <div className=' md:w-1/2'>
            <div className=' text-left'>
              <Title title='Testimonial' />
            </div>
            <div className=' text-left'>
              <MiddleTitle first='Our  ' second='satisfied customers' third='share their stories'/>
            </div>
            
      <p className="py-6"><RightTitle text="Using Fitness app has truly transformed my workout routine. With its user-friendly interface and personalized workout plans, I've seen significant progress in my fitness journey. The variety of exercises keeps me engaged, and the progress tracking feature helps me stay motivated. I highly recommend this app to anyone looking to achieve their fitness goals" /></p>
      
    </div>
  </div>
</div>
   </Container>
  );
};

export default Blog;