import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-600 text-white py-4 text-center'>
      <p className='text-sm'>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
