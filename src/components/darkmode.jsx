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
    <div class="fixed top-12 right-4 z-50">
      {/* Toggle button */}
      <button
        onClick={toggleDarkMode}
        class="p-2 rounded-full transition-colors duration-500 ease-in-out"
        aria-label="Toggle Dark Mode">
        {darkMode ? (
          <img src="src/assets/images/contrast.png" class="w-8 opacity-0 transition-opacity duration-1000" alt="" />
        ) : (
          <img src="src/assets/images/crescent-moon.png" class="w-8 transition-opacity duration-1000" alt=""  />        
        )}
      </button>
    </div>
  )
}

export default DarkMode
