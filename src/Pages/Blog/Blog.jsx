import React from 'react';
import Container from '../../Shared/Container/Container';
import Title from '../../Shared/Title/Title';
import MiddleTitle from '../../Shared/MiddleTitle/MiddleTitle';
import blog from '../../assets/test.jpg'
import LastTitle from '../../Shared/LastTitle/LastTitle';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import Slider from "react-slick";
import PrevArrow from '../../Components/PrevArrow';
import NextArrow from '../../Components/Banner/NextArrow';


const Blog = () => {
   var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
     initialSlide: 0,
      arrows: true,
      prevArrow:<PrevArrow />,
      nextArrow:<NextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <Container>
      <div className=' py-24'>
         <div className="hero ">
  <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className=' md:w-1/2'>
          
    </div>
    <div className=' md:w-1/2'>
            <div className=' text-left'>
              <Title title='Testimonial' />
            </div>
            <div className=' text-left'>
              <MiddleTitle first='Our  ' second='satisfied customers' third='share their stories'/>
            </div>
               <div>
       
        <Slider {...settings}>
          <div>
           <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
             <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
             <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
            <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
             <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
             <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          
        </Slider>
      </div>
            
      
      
    </div>
  </div>
</div>
      </div>
   </Container>
  );
};

export default Blog;