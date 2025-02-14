import React from 'react';

interface Props {
    children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({children}) => {
  return (
    <div className='md:py-13 py-10 xl:px-42 lg:px-28 md:px-10 sm:px-8 px-6'>
        {children}
    </div>
  );
}

export default Wrapper;