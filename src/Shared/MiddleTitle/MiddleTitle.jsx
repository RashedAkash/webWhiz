import React from 'react';

const MiddleTitle = ({first,second,third}) => {
  return (
    <div>
      <h2 className=' text-[#130929] font-bold text-[40px] '>{first} <span className=' bg-gradient-to-b from-blue-200 to-blue-500 text-transparent bg-clip-text '>{second}</span> {third} </h2>
    </div>
  );
};

export default MiddleTitle;