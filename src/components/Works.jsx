import React from "react";

const Works = () => {
  return (
    // Main container with responsive height
    <div name="work" className="w-full md:h-screen bg-[] relative z-10 pt-40">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Section header */}
        <div className="pb-8 w-full flex justify-center items-center flex-col my-4">
          <p className="text-4xl font-bold inline border-b-4  border-rose-300">
            Our Work
          </p>
          <p className="py-6 text-2xl">Some of our recent hair studio jobs</p>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-4 content-div">
            <div className="group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-black tracking-wider">
                Men Style
              </span>
              <p className="text-center">
                A modern and stylish haircut for men.
              </p>
              <img
                src="10.jpg"
                alt="Project Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-auto content-div">
            {/* card1*/}
            <div className="flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-black tracking-wider">
                Men Style
              </span>
              <p className="text-center ">A modern and stylish haircut for men.</p>
              <img
                src="11.jpg"
                alt="Project Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-auto content-div">
            {/* card2 */}
            <div className="flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-black tracking-wider">
                Men Style
              </span>
              <p className="text-center ">A modern and stylish haircut for men.</p>
              <img
                src="14.jpg"
                alt="Project Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-4 content-div">
            {/* card3 */}
            <div className="flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-black tracking-wider">
                Men Style
              </span>
              <p className="text-center ">A modern and stylish haircut for women.</p>
              <img
                src="2.jpg"
                alt="Project Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-4 content-div">
            {/* card4 */}
            <div className="flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-black tracking-wider">
                Men Style
              </span>
              <p className="text-center ">A modern and stylish haircut for women.</p>
              <img
                src="12.jpg"
                alt="Project Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto my-auto content-div">
            {/* card5 */}
            <div className="flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-black tracking-wider">
                Men Style
              </span>
              <p className="text-center ">A modern and stylish haircut for women.</p>
              <img
                src="13.jpg"
                alt="Project Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
