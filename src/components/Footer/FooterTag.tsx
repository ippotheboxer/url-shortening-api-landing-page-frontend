import React from 'react';

interface Props {
    children: React.ReactNode;
}

const FooterTag: React.FC<Props> = ({ children }) => {
  return (
    <li className='fill-white hover:fill-cyan text-sm md:text-base pb-4 text-white/70 hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out'>{children}</li>
  );
}

export default FooterTag;