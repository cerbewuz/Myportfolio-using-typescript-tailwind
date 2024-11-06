import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Navbar container */}
      <div className="absolute top-0 left-0 w-full bg-transparent">
        {/* Navbar content */}
        <div className="flex justify-center items-center px-4 py-2 md:px-6 md:py-4">

           {/* Navbar Links */}
           <div className="flex space-x-4 sm:space-x-6 md:space-x-8 items-center text-black">
            <a
              href="#"
              className="group relative p-2 sm:p-3 cursor-pointer text-sm sm:text-lg md:text-xl font-kanit transition-all duration-300 ease-in-out"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-2 sm:p-3 cursor-pointer text-sm sm:text-lg md:text-xl font-kanit transition-all duration-300 ease-in-out"
            >
              Skills
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-2 sm:p-3 cursor-pointer text-sm sm:text-lg md:text-xl font-kanit transition-all duration-300 ease-in-out"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-2 sm:p-3 cursor-pointer text-sm sm:text-lg md:text-xl font-kanit transition-all duration-300 ease-in-out"
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