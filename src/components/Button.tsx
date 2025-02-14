import React from 'react';

interface Props {
    children: React.ReactNode;
    square?: boolean;
    type?: "submit";
  }

const Button: React.FC<Props> = ({ children, square, type }) => {
  return (
    <button type={type} className={`bg-cyan text-white font-poppins hover:bg-[#9ce2e2] hover:cursor-pointer transition duration-300 ease-in-out poppins-bold
    ${square ? "w-full md:w-40 rounded-sm py-1 px-3 lg:py-2 lg:px-6 text-base lg:text-lg" : "rounded-4xl py-3 px-10 md:py-2 md:px-6 text-lg md:text-sm"}
    `}>
        {children}
    </button>
  );
}

export default Button;