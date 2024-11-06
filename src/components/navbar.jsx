import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Event handler to show the navbar when the cursor is near
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  // Event handler to hide the navbar when the cursor is away
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  // Add event listeners for mouseenter and mouseleave
  useEffect(() => {
    const hoverZone = document.getElementById('hover-zone');
    const navbar = document.getElementById('navbar');

    hoverZone.addEventListener('mouseenter', handleMouseEnter);
    navbar.addEventListener('mouseenter', handleMouseEnter);
    navbar.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hoverZone.removeEventListener('mouseenter', handleMouseEnter);
      navbar.removeEventListener('mouseenter', handleMouseEnter);
      navbar.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [])

  return (
    <>
      {/* Hover zone at the top of the page to detect when the cursor is near */}
      <div id="hover-zone" className="fixed top-0 left-0 w-full h-12 z-50"></div>

      {/* Navbar container that appears when hovered */}
      <div
        id="navbar"
        className={`fixed top-0 left-0 w-full z-40 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}
        bg-transparent
      >
        {/* Navbar content */}
        <div className="flex justify-center items-center p-4">
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
