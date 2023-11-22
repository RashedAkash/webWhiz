import React from 'react';
import Title from '../../Shared/Title/Title'
import LastTitle from '../../Shared/LastTitle/LastTitle';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import Container from '../../Shared/Container/Container';

const Portfolio = () => {
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
      </Container>
   </div>
  );
};

export default Portfolio;