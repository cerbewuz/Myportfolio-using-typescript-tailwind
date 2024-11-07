import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  // State to track dark mode status
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add or remove dark class from the root html element on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="fixed top-3 right-4 z-50">
      {/* Toggle button */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full transition-colors duration-300 ease-in-out"
        aria-label="Toggle Dark Mode">
        {darkMode ? (
          <svg
            className="w-8 h-8 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12h-1m15.607 5.657l-.707-.707M6.343 6.343l-.707-.707m12.02 12.02l-.707-.707M6.343 17.657l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
            ></path>
          </svg>
        ) : (
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
        )}
      </button>
    </div>
  )
}

export default DarkMode
