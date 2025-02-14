import React from 'react';

interface Props {
    children: React.ReactNode
}

const NavbarItem:React.FC<Props> = ({children}) => {
  return (
    <li className='text-sm md:text-[15px] mr-4 lg:mr-8 text-grayish-violet font-poppins poppins-bold hover:cursor-pointer hover:text-black transition duration-200 ease-in-out'>{children}</li>
  );
}

export default NavbarItem;