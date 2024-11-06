import React from 'react';

const Sidebar = () => {
  return (
      <>
    <div className="fixed h-screen mt-64">
      {/* Sidebar Container */}
      <div className="group flex">
        {/* Hidden Sidebar */}
        <div className="absolute transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out w-12 h-screen bg-transparent">
          <ul className="space-y-2">
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <a href="https://www.facebook.com/profile.php?id=61560265347802" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-plain.svg" alt="fblogo" class="w-32 sm:w-48 md:w-64 lg:w-96"/> 
            </a>
            </li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <a href="https://ph.linkedin.com/in/renvic-emenido03" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="lilogo"/>      
            </a>    
            </li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <a href="https://github.com/cerbewuz" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="ghlogo" />
            </a>
            </li>
          </ul>
        </div>
        <div className="h-screen bg-gray flex-1 p-10 transition-all duration-300 ease-in-out group-hover:ml-64">
        </div>
      </div>
    </div>
    </>
  )
} 
export default Sidebar