import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Sidebar Container */}
      <div className="relative">
        {/* Hamburger Menu (visible on small screens only) */}
        <div
          className="md:hidden fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          <svg
            className="w-8 h-8 text-black cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed justify-center items-center top-0 left-0 h-screen bg-transparent text-white w-16 sm:w-24 md:w-32 flex flex-col items-center p-4 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
        >
          {/* Sidebar content */}
          <ul className="space-y-4">
            <li className="sm:p-4 hover:bg-gray-700 cursor-pointer">
              <a
                href="https://www.facebook.com/profile.php?id=61560265347802"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-plain.svg"
                  alt="Facebook Logo"
                  className="w-8 sm:w-12 md:w-16 lg:w-24"
                />
              </a>
            </li>
            <li className="sm:p-4 hover:bg-gray-700 cursor-pointer">
              <a
                href="https://ph.linkedin.com/in/renvic-emenido03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                  alt="LinkedIn Logo"
                  className="w-8 sm:w-12 md:w-16 lg:w-24"
                />
              </a>
            </li>
            <li className="sm:p-4 hover:bg-gray-700 cursor-pointer">
              <a
                href="https://github.com/cerbewuz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="GitHub Logo"
                  className="w-8 sm:w-12 md:w-16 lg:w-24"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
