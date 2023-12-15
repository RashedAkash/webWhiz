
import Title from '../../Shared/Title/Title'
import LastTitle from '../../Shared/LastTitle/LastTitle';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import Container from '../../Shared/Container/Container';
import img1 from '../../assets/portfolio.png';
import img2 from '../../assets/fitness.png';
import img3 from '../../assets/eventLab.png';
import img4 from '../../assets/fruit.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
     cssEase: "linear",
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
    <div className=' py-16 bg-[#f2f3f5fc]'>
      <Container>
         <div className=' md:flex gap-16 justify-between items-center'>
      <div className=' md:w-1/2 text-left'>
      <Title title='portfolio' />
      <LastTitle first='Discovering digital mastery and' second='Creative innovation' />
    </div>
      <div className=' md:w-1/2'>
      <RightTitle text="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity."/>
          </div>
          
        </div>
        <div>
          <section className="">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-blue-400 mb-10">Our
            Portfolio</h1>

        
                

                

              

               
                <Slider {...settings}>
          <div>
           <a href="https://parsonal-portfolio.vercel.app/">
                   <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}} >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-blue-800 ">
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Portfolio</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400700 ">Next js</p>
                </div>
            </div>
           </a>
          </div>
          <div>
            <a href="https://fitness-b1aa9.web.app/">
                  <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(${img2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}} >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-blue-800 ">
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Fitness gym</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400700 ">React js</p>
                </div>
            </div>
            </a>
          </div>
          <div>
              <a href="https://event-lab-551ad.web.app/">
                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{backgroundImage: `url(${img3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}} >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-blue-800 ">
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Event lab</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400700 ">Firebase</p>
                </div>
            </div>
          </a>
          </div>
          <div>
             <a href="https://rashedakash.github.io/fruit-brust/">
                  <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96"style={{backgroundImage: `url(${img4})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}} >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-blue-800 ">
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Fruit brust</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400700 ">Tailwind css</p>
                </div>
            </div>
                </a>
          </div>
          
          
        </Slider>
        
    </div>
</section>
        </div>
      </Container>
   </div>
  );
};

export default Portfolio;