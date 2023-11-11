
import { Routes, Route, Outlet } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Profile from "./Profile/Profile"
import Navbar from "./Navbar/Navbar"
import Setting from "./settings/Setting"
import About from "./about/About"

const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <Navbar />

      </div>

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="element">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Main