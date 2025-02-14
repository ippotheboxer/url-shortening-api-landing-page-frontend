import React from 'react';

const DividerStatisticLine: React.FC = () => {
  return (
    <div className='md:mr-6 lg:mr-8 relative'>
        <hr className='absolute left-35 md:left-0 -top-13.5 md:top-32 bg-cyan h-[6px] w-10 md:w-6 lg:w-8 border-0 rotate-90 md:rotate-0' />
    </div>
  );
}

export default DividerStatisticLine;