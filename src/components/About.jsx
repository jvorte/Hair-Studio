//About.jsx
import React from "react";


const About = () => {
  return (
    // Main container with full width/height and background
    <div
      name="about"
      id="about"
      className="w-full h-screen text-gray-800  z-10 pt-20 "
    >
      {/*Content container with cyan background*/}
      <div className="flex flex-col justify-center items-center w-full h-full ">
        {/*Title section using grid */}
        <div className="py-16 rounded-md flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4  border-rose-300">
              Elevate Your Style 
              </p>
            </div>
            <div></div>
            {/*Content section with responsive grid*/}
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl ">
              <p>
              We don’t just cut hair—we create styles that complement your personality and lifestyle, using top-quality products and techniques.
              </p>
            </div>
            <div>
          
            <div className="mt-4">
        
            <div className="grid grid-cols-2 gap-4 mt-2">
              <img src="src\assets\4.jpg" alt="Project 1" className="rounded-md shadow-md" />
              <img src="src\assets\7.jpg" alt="Project 2" className="rounded-md shadow-md" />
              <img src="src\assets\3.jpg" alt="Project 3" className="rounded-md shadow-md" />
              <img src="src\assets\5.jpg" alt="Project 4" className="rounded-md shadow-md" />
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
