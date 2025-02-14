import React from 'react';
//Images and icons
import brandLogo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Components
import Button from "../Button";
import NavbarItem from './NavbarItem';
import Wrapper from '../Wrapper';

interface Props {
    mobileNavbar: boolean;
    updateMobileNavbar: () => void;
    isDesktop: boolean;
}

const Header:React.FC<Props> = ({ mobileNavbar, updateMobileNavbar, isDesktop }) => {
  return (
    <Wrapper>
            {!isDesktop ? (
                <>
                <header className='flex items-center justify-between'>
                <img src={brandLogo} alt="Shortly logo" className='h-8 md:mr-4 w-30' />
                <FontAwesomeIcon icon={faBars} style={{color: "#9d9ba5",}} className='fa-xl hover:cursor-pointer' onClick={updateMobileNavbar} />
                
                </header>
                {mobileNavbar && 
                    <div className='mt-8 p-4 flex items-center text-center text-lg flex-col bg-dark-violet font-poppins poppins-medium text-white rounded-xl'>
                        <ul>
                            <li className='pt-4 pb-4 hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out'>Features</li>
                            <li className='pb-4 hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out'>Pricing</li>
                            <li className='pb-4 border-b-1 border-grayish-violet px-32 hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out'>Resources</li>
                            <li className='pb-4 pt-4 hover:text-cyan hover:cursor-pointer transition duration-200 ease-in-out'>Login</li>
                            <li className='pb-4'><Button>Sign up</Button></li>
                        </ul>
                    </div>
                    }
                </>
            ) : (
                <header className='flex items-center justify-between'>
            <ul className='flex items-center justify-between'>
                <NavbarItem><img src={brandLogo} alt="Shortly logo" className='h-8 w-30 md:mr-4' /></NavbarItem>
                <NavbarItem>Features</NavbarItem>
                <NavbarItem>Pricing</NavbarItem>
                <NavbarItem>Resources</NavbarItem>
            </ul>

            <ul className='flex items-center justify-between'>
                <NavbarItem>Login</NavbarItem>
                <NavbarItem>
                    <Button>
                        Sign Up
                    </Button>
                </NavbarItem>
            </ul></header>
            )}
    </Wrapper>
  );
}

export default Header;