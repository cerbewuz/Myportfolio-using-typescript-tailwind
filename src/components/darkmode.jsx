import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  // State to track dark mode status
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  // For the dark mode toggle

triggerButton.addEventListener('click', () => {
    image1.classList.add('opacity-0');
    image2.classList.remove('opacity-0');
})

  // Add or remove dark class from the root html element on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
<<<<<<< HEAD
    <div class="fixed top-12 right-4 z-50">
=======
    <div className="relative top-12 sm:top-16 md:top-10 lg:top-8 right-4">
>>>>>>> parent of f167e5f (@update)
      {/* Toggle button */}
      <button
        onClick={toggleDarkMode}
        class="p-2 rounded-full transition-colors duration-500 ease-in-out"
        aria-label="Toggle Dark Mode">
        {darkMode ? (
          <img src="src/assets/images/contrast.png" class="w-8 opacity-0 transition-opacity duration-1000" alt="" />
        ) : (
<<<<<<< HEAD
          <img src="src/assets/images/crescent-moon.png" class="w-8 transition-opacity duration-1000" alt=""  />        
=======
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3C8.134 3 5 6.134 5 10s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z">
             </path>
          </svg>
>>>>>>> parent of f167e5f (@update)
        )}
      </button>
    </div>
  )
}

export default DarkMode
