import React from 'react';
// Components
import Wrapper from '../Wrapper';
import FooterList from './FooterList';
import FooterTag from './FooterTag';
// Icon images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <div className='bg-very-dark-violet'>
        <Wrapper>  
            <div className='font-poppins flex flex-col md:flex-row items-center text-center md:text-start md:items-start md:justify-between'>
            <h2 className='text-3xl poppins-bold text-white pb-8 md:pb-0'>Shortly</h2>
            <FooterList title='Features'>
                <FooterTag>Link Shortening</FooterTag>
                <FooterTag>Branded Links</FooterTag>
                <FooterTag>Analytics</FooterTag>
            </FooterList>

            <FooterList title='Resources'>
                <FooterTag>Blog</FooterTag>
                <FooterTag>Developers</FooterTag>
                <FooterTag>Support</FooterTag>
            </FooterList>

            <FooterList title='Company'>
                <FooterTag>About</FooterTag>
                <FooterTag>Our Team</FooterTag>
                <FooterTag>Careers</FooterTag>
                <FooterTag>Contact</FooterTag>
            </FooterList>

              <ul className='flex flex-row items-center pt-4 md:pt-0'>
                <li className='text-white hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out fa-xl mr-4'><FontAwesomeIcon icon={faSquareFacebook} /></li>
                <li className='text-white hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out fa-xl mr-4'><FontAwesomeIcon icon={faTwitter} /></li>
                <li className='text-white hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out fa-xl mr-4'><FontAwesomeIcon icon={faPinterest} /></li>
                <li className='text-white hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out fa-xl mr-4'><FontAwesomeIcon icon={faInstagram} /></li>
              </ul>
            </div>
        </Wrapper>
    </div>
  );
}

export default Footer;