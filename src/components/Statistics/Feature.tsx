import React from 'react';

interface Props {
    imgSrc: string;
    title: string;
    description: string;
}

const Feature: React.FC<Props> = ({imgSrc, title, description}) => {
  return (
    <div className='flex flex-col items-center md:items-start bg-white rounded-md md:p-4 lg:p-6 py-6 px-4 mb-18 md:mb-0 w-80 pb-4 md:pb-10 md:h-80 lg:h-70 xl:h-80 2xl:h-60 md:w-60 lg:w-80 xl:w-fit'>
        <img src={imgSrc} alt="Icon for feature" className='md:ml-4 -mt-14 rounded-full p-4 bg-dark-violet w-16 h-16' />
        <h3 className='md:text-start mt-2 md:mt-5 pb-2 md:pb-4 text-lg md:text-2xl text-very-dark-blue font-poppins poppins-bold'>{title}</h3>
        <p className='md:text-start text-base md:text-lg text-gray font-poppins poppins-medium'>{description}</p>
    </div>
  );
}

export default Feature;