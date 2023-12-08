import React from 'react';
import Container from '../../Shared/Container/Container';
import Title from '../../Shared/Title/Title';
import MiddleTitle from '../../Shared/MiddleTitle/MiddleTitle';



const Blog = () => {
  return (
    <Container>
      <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
          <div className=' md:w-1/2'>
            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div className=' md:w-1/2'>
            <div className=' text-left'>
              <Title title='blog' />
            </div>
            <div className=' text-left'>
              <MiddleTitle first='Our  ' second='satisfied customers' third='share their stories'/>
            </div>
            
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
   </Container>
  );
};

export default Blog;