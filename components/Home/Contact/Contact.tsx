import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-16 pb-15 bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] items-center mx-auto mt-16">
        {/* Contact Form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="lg:col-span-2 bg-gray-900 rounded-xl p-6"
        >
          {/* Input */}
          <input
            type="text"
            placeholder="Name*"
            className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white outline-none"
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Email*"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white outline-none"
          />
          {/* Subject */}
          <input
            type="text"
            placeholder="Subject*"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white outline-none"
          />
          {/* Comments */}
          <textarea
            rows={5}
            placeholder="Comments*"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-white text-white outline-none"
          />
          {/* Button */}
          <button className="w-full px-6 py-3 bg-[#b69974] uppercase cursor-pointer rounded-full text-white">
            Submit
          </button>
        </div>
        {/* Cards */}
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
          className="lg:col-span-1"
        >
          {/* first card */}
          <div className="p-6 bg-blue-800 mt-4 mb-4 flex items-center space-x-4">
            <div className="w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-col">
              <FaArrowRight className="text-blue-800" />
            </div>
            <div>
              <h1 className="text-white text-sm font-semibold">Call Now</h1>
              <h1 className="text-[20px] font-bold text-white">+0994132235</h1>
            </div>
          </div>
          {/* second card */}
          <div className="p-6 bg-blue-800 mt-4 mb-4 flex items-center space-x-4">
            <div className="w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-col">
              <FaArrowRight className="text-blue-800" />
            </div>
            <div>
              <h1 className="text-white text-sm font-semibold">Email Now</h1>
              <h1 className="text-[20px] font-bold text-white">
                pavel.vynn@gmail.com
              </h1>
            </div>
          </div>
          {/* third card */}
          <div className="p-6 bg-blue-800 flex items-center space-x-4">
            <div className="w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-col">
              <FaArrowRight className="text-blue-800" />
            </div>
            <div>
              <h1 className="text-white text-sm font-semibold">Address</h1>
              <h1 className="text-[20px] font-bold text-white">Kiev</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
