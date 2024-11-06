import React, { useState, useEffect } from 'react'

const Navbar = () => {
  
  return (
    <>
      {/* Navbar container that appears when hovered */}
      <div className="absolute top-0 left-0 w-full bg-transparent">
        {/* Navbar content */}
        <div className="flex justify-center items-center md:p-4">
          {/* Navbar Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="group relative p-3 cursor-pointer text-black font-kanit text-lg transition-all duration-300 ease-in-out"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-3 cursor-pointer text-black font-kanit text-lg transition-all duration-300 ease-in-out"
            >
              Skills
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-3 cursor-pointer text-black font-kanit text-lg transition-all duration-300 ease-in-out"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-3 cursor-pointer text-black font-kanit text-lg transition-all duration-300 ease-in-out"
            >
              Contact Me
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
