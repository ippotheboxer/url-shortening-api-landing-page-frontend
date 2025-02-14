import React from 'react';

interface Props {
    children: React.ReactNode;
    title: string;
}

const FooterList: React.FC<Props> = ({title, children}) => {
  return (
    <ul>
        <h3 className='poppins-bold text-lg py-4 md:pt-0 text-white'>{title}</h3>
        {children}
    </ul>
  );
}

export default FooterList;