// Import necessary dependencies
import React, { useState } from 'react';
// Import icons we'll use for our navbar
import { FaBars, FaTimes } from 'react-icons/fa';
// Import Link for smooth scrolling between sections
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // Main navbar container - fixed at top, full width
    <div className='max-w-6xl fixed mt-15 left-1/2 gap-70 transform -translate-x-1/2 -translate-y-1/2 w-full h-10 flex justify-center items-center p-10 text-l rounded-xl bg-gray-100 text-black z-20 '>

 
      <div>
     
        <div className="w-full pt-15 max-w-[150px]">
        <img
          src="17.png"
          alt="Contact"
          className="w-full h-auto rounded-lg"
        />
      </div>
          {/* <h1 className='font-thin text-2xl italic font-serif'>Hair Studio</h1> */}
      </div>

      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8 p-20'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Our Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  text-gray-100  bg-[#191c18] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Our Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* Add more mobile menu items as needed */}
      </ul>
    </div>
  );
};

export default Navbar;
