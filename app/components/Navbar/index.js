"use client"
import { useState } from 'react';
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar= () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  return (
    <div className='bg-dark_green md:p-10 p-4 w-full flex items-center justify-between gap-14'>
        <div className='max-w-48 w-full'>
            <Image src='/assets/Logo.svg' alt='Logo' width={100} height={100} className='w-full' />
        </div>
        <div className='hidden lg:flex items-center justify-between gap-2 w-full'> 
            <ul className='flex items-center gap-8'>
                <li className='text-white text-base	font-medium cursor-pointer'>FEATURES</li>
                <li className='text-white text-base	font-medium cursor-pointer'>PRICING</li>
                <li className='text-white text-base	font-medium cursor-pointer'>SUPPORT</li>
                <li className='text-white text-base	font-medium cursor-pointer'>LOGIN</li>
            </ul>
            <div className='flex items-center gap-4'>
                <button className='border border-white rounded-3xl text-base font-normal py-2 px-5 text-white'><a href="/signup">SIGN UP</a></button>
                <button className='bg-green rounded-3xl text-base font-normal py-2 px-5 text-dark_green_100'>GET STARTED</button>
            </div>
        </div>
        <div className='lg:hidden block cursor-pointer' onClick={handleToggleMenu}>
        <GiHamburgerMenu className='text-white h-10 w-8' />
      </div>
        {isMenuOpen && (
        <div className='lg:hidden block fixed h-[100vh] w-[80%] left-0 pt-10 top-0 bg-green z-50'>
         <ul className='flex flex-col items-center gap-4'>
          <li className='text-white text-base	font-medium cursor-pointer'>FEATURES</li>
          <li className='text-white text-base	font-medium cursor-pointer'>PRICING</li>
          <li className='text-white text-base	font-medium cursor-pointer'>SUPPORT</li>
          <li className='text-white text-base	font-medium cursor-pointer'>LOGIN</li>
        </ul>
      </div>
      )}
    </div>
  )
}

export default Navbar;