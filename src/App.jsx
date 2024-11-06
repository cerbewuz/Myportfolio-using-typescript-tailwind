import Sidebar from "./components/sidebar"
import Navbar from "./components/navbar"
import Main from "./components/main"

function App() {
  

  return (
      <> 
     <div className="flex-grow">
      <div className="group relative">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Navbar />
        <Main />
      </div>
    </div>
      </>
  )
}

export default App
