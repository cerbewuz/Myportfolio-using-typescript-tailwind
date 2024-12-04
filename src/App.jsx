import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import Darkmode from "./Components/Darkmode"
import Main from "./Components/Main"

function App() {
  return (
    <>
      <div class="relative flex bg-blue-200 dark:bg-black text-black dark:text-white min-h-screen">
        {/* Sidebar: fixed to the left */}
      <div className="flex h-screen bg-blue-200 dark:bg-gray-900 text-black dark:text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area: flex, centered and ignoring the sidebar */}
        <div class="flex flex-col flex-grow ml-16 md:ml-24 lg:ml-32">
        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          {/* Navbar and Dark Mode Button */}
          <div className="flex flex-col justify-between items-center">
          <div class="flex justify-between items-center p-4">
            <Navbar />
            <DarkMode />
          </div>

          {/* Main Content */}
          <div class="flex flex-grow justify-center items-center">
            <Main />
          </div>
          <Main />
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
  
}

export default App
