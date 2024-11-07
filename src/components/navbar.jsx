import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* Fixed Navbar container */}
      <div className="fixed top-0 left-0 w-full bg-transparent dark:bg-black z-50">
        {/* Navbar content */}
        <div className="flex justify-center items-center px-4 py-2 md:px-6 md:py-4">
          {/* Navbar Links */}
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 items-center text-black dark:text-white">
            <a
              href="#"
              className="group relative p-2 sm:p-3 cursor-pointer text-sm sm:text-lg md:text-xl font-kanit transition-all duration-300 ease-in-out"
              aria-label="Home"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-2 sm:p-3 cursor-pointer text-sm sm:text-lg md:text-xl font-kanit transition-all duration-300 ease-in-out"
              aria-label="Skills"
            >
              Skills
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-2 sm:p-3 cursor-pointer text-sm sm:text-lg md:text-xl font-kanit transition-all duration-300 ease-in-out"
              aria-label="Projects"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-1 bg-transparent group-hover:bg-gray-700 transition-all duration-300"></span>
            </a>
            <a
              href="#"
              className="group relative p-2 sm:p-3 cursor-pointer text-sm sm:text-lg md:text-xl font-kanit transition-all duration-300 ease-in-out"
              aria-label="Contact Me"
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
