import Logo from "@/components/Helper/Logo";
import Image from "next/image";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      {/* top part */}
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div>
          {/* logo */}
          <Logo />
          {/* description */}
          <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
            Conditions Terms of Use Ours feature sign Services ew Guests List
            The Team List Guests Lis tThe Team List
          </p>
          {/* socials links */}
          <div className="flex items-center space-x-4 mt-6">
            {/* facebook */}
            <div
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col
             cursor-pointer hover:bg-blue-700 transition-all duration-300"
            >
              <FaFacebookF className="w-6 h-6 text-white" />
            </div>
            {/* Youtube */}
            <div
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col
             cursor-pointer hover:bg-red-700 transition-all duration-300"
            >
              <FaYoutube className="w-6 h-6 text-white" />
            </div>
            {/* Instagram */}
            <div
              className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col
             cursor-pointer hover:bg-pink-600 transition-all duration-300"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* second part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">Address</h1>
          <div className="mt-8 space-y-5">
            {/* address */}
            <div className="flex items-center space-x-5">
              <FaPaperPlane className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                Old city Street, Ukraine <br /> 1212 Kiev-3500
              </p>
            </div>
            {/* phone */}
            <div className="flex items-center space-x-5">
              <FaPhone className="w-5 h-5  text-white" />
              <p className="font-medium text-sm text-white">+99 413 1521</p>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-5">
              <IoMailOpen className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                pavel.vynn@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* THIRD PART */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white ">More services</h1>
          <div className="mt-8">
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">UI Design</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">UX Design</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">Web App</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">
                Digital Marketing
              </p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">Video Editing</p>
            </div>
          </div>
        </div>

        {/* Forth part */}
        <div className="mx-auto">
          <h1 className="text-lg font-bold text-white">Newsletter</h1>
          <div className="mt-8">
            <p className="font-medium text-sm text-white">
              It is a long established fact that a reader will be distracted
            </p>
            <div className="mt-5 flex items-center space-x-4">
              <Image src="/images/f.jpg" alt="img" width={80} height={25} />
              <div className="flex-1">
                <div className="flex items-center">
                  <BiCalendar className="text-amber-300 w-6 h-6 mr-2" />
                  <p className="text-white text-sm font-semibold">
                    25 October,2025
                  </p>
                </div>
                <p className="mt-2 text-white font-bold">
                  The standard chunk of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
        <p className="mt-8 text-gray-300">© WebDev VynPvl 2026 | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
