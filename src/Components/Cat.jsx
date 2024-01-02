import React from 'react';

const Cat = ({ cat }) => {
  console.log(cat);
  return (
    <div className='text-left  '>
      <span className=' mr-6 text-[#64656D] ' >{cat?.category }</span>
    </div>
  );
};

export default Cat;