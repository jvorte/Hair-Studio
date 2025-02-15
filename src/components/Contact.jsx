import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center mt-40 "
    >
      {/* Image Section */}
      <div className="w-full max-w-[200px]">
    
      </div>

      {/* Form Section */}
      <div className="w-full max-w-[500px] text-center pt-10 ">
        <p className="text-4xl font-bold inline border-b-4 border-rose-300">
          Contact
        </p>
        <p className="text-gray-800 py-4">Send me a message</p>
        <form className="flex flex-col">
          <input
            className="bg-[#ffa5b173] p-4 rounded mb-4"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-4 bg-[#ffa5b16f] rounded"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ffa5b16a] p-4 rounded mb-4"
            name="message"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button className="text-white bg-rose-200 border-2 hover:bg-rose-300 hover:border-rose-300 px-6 py-3 mx-auto flex items-center rounded">
            Send
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <div className="w-full text-center mt-8">
        <p className="text-gray-800">&copy; 2023 Your Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
