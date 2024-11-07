import Sidebar from "./components/sidebar"
import Navbar from "./components/navbar"
import DarkMode from "./components/darkmode"
import Main from "./components/main"

function App() {
  return (
    <>
      <div className="flex h-screen bg-blue-200 dark:bg-gray-900 text-black dark:text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          {/* Navbar and Dark Mode Button */}
          <div className="flex flex-col justify-between items-center">
            <Navbar />
            <DarkMode />
          </div>

          {/* Main Content */}
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
