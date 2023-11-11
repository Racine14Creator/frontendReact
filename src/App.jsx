import "./App.css"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <Main />
        </div>
      </Router>

    </>
  )
}

export default App
