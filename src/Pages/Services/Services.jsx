import React from 'react';
import  {services}  from '../../../public/services.data';
import ServiceCard from './ServiceCard';
import './services.css'
import Container from '../../Shared/Container/Container';

const Services = () => {
  
  return (
    <div className=' bg-img'>
      <Container>
         <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 '>
      {
        services.map(service=> <ServiceCard key={service.title} service={service}/>)
      }
    </div>
     </Container>
    </div>
  );
};

export default Services;