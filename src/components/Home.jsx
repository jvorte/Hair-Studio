import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import { Link } from "react-scroll"; // For smooth scrolling

const Home = () => {
  return (
    // Main container - full screen with dark background
    <div name="home" className="h-screen w-full bg-cover bg-center bg-no-repeat bg-[url(assets/20.jpg)] sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover">

      {/* Content wrapper - centers content and handles responsive layout */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
    
        <div className="flex flex-col justify-center h-full">
        
          <h2 className="text-4xl sm:text-7xl font-bold text-yellow-100">
            Your <span className="text-rose-200">Hair</span>, Our Passion
          </h2>
          {/* Brief introduction */}
          <p className="text-yellow-50 py-4 max-w-md">
            From trend-setting cuts to stunning color transformations, we craft looks that make you feel confident and beautiful every day.
          </p>
          {/* About Me button with hover effect */}
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-rose-300 to-rose-400 cursor-pointer"
            >
              About Us
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
