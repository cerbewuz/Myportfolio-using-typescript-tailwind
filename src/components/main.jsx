const Main = () => {
  return (
    <>
      {/* Main container that covers the full screen */}
      <div className="flex flex-col justify-center items-center bg-blue-200 dark:bg-black h-screen p-6">
        {/* Text content in the center */}
        <div className="text-center">
          <h3 className="p-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-kanit">
            Hello! I am
          </h3>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-kanit">
            Renvic
          </h1>
        </div>
      </div>
    </>
  )
}

export default Main
