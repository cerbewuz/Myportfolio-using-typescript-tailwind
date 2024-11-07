import React from 'react'

const Sidebar = () => {
  return (
    <>
      {/* Sidebar Container */}
      <div className="fixed top-12 left-0 h-screen bg-transparent text-white flex flex-col items-center justify-center">
        {/* Sidebar width and styling for different screen sizes */}
        <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-full flex flex-col justify-center items-center bg-transparent p-4">
          {/* Sidebar content */}
          <ul className="space-y-4">
            <li className="hover:bg-white cursor-pointer p-2">
              <a
                href="https://www.facebook.com/profile.php?id=61560265347802"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-plain.svg"
                  alt="Facebook Logo"
                  className="w-8 sm:w-10 md:w-12 lg:w-16 rounded-16"
                />
              </a>
            </li>
            <li className="hover:bg-blue-400 rounded dark:hover:bg-white cursor-pointer p-2">
              <a
                href="https://ph.linkedin.com/in/renvic-emenido03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                  alt="LinkedIn Logo"
                  className="w-8 sm:w-10 md:w-12 lg:w-16 dark:bg-blue-300"
                />
              </a>
            </li>
            <li className="hover:bg-blue-400 rounded-full dark:hover:bg-white cursor-pointer p-2">
              <a
                href="https://github.com/cerbewuz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="GitHub Logo"
                  className="w-8 sm:w-10 md:w-12 lg:w-16 dark:bg-white dark:rounded-full"
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
