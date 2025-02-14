import React from 'react';
// Components
import Wrapper from '../Wrapper';
import Feature from './Feature';
import DividerStatisticLine from './DividerStatisticLine';
// Images
import iconBrandRecognition from "../../assets/images/icon-brand-recognition.svg";
import iconDetailedRecords from "../../assets/images/icon-detailed-records.svg";
import iconFullyCustomizable from "../../assets/images/icon-fully-customizable.svg";

const Statistics: React.FC = () => {
  return (
    <Wrapper>
        <div className='flex flex-col items-center text-center -mt-5'>
            <h2 className='pb-4 text-very-dark-blue font-poppins poppins-bold text-3xl md:text-4xl'>Advanced Statistics</h2>
            <p className='w-7/12 font-poppins poppins-medium text-base md:text-lg text-grayish-violet'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className='flex md:flex-row flex-col mt-20'>
            <Feature 
            imgSrc={iconBrandRecognition} 
            title='Brand Recognition' 
            description="Boost your brand recognition with each click. Generic clicks don't mean a thing. Branded links help instil confidence in your content." />
            
            <DividerStatisticLine />
            <div className='md:mt-8'>
            <Feature 
            imgSrc={iconDetailedRecords} 
            title='Detailed Records' 
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
            </div>

            <DividerStatisticLine />
            <div className='md:mt-16'>
            <Feature 
            imgSrc={iconFullyCustomizable} 
            title='Fully Customizable' 
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
            </div>
            </div>
        </div>
    </Wrapper>
  );
}

export default Statistics;