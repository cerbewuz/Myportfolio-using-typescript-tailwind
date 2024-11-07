import React from 'react'

const Main = () => {
  return (
    <>
      {/* Main container that fills the screen and supports scrolling */}
      <div className="min-h-screen bg-blue-200 dark:bg-black flex flex-col justify-center items-center p-6">
        {/* Centered content */}
        <div className="text-center">
          <h3 className="p-4 text-lg sm:text-xl md:text-2xl font-kanit">Hello! I am</h3>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-kanit">Renvic</h1>
        </div>

        {/* Additional content that will expand downwards and cause scrolling */}
        <div className="mt-8 text-center">
          <p className="text-lg sm:text-xl">Test Demo</p>
        </div>
      </div>
    </>
  )
}

export default Main
