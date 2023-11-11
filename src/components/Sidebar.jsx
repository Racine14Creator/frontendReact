import "./Sidebar.css"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (

    <div className="sidebar">
      <div className="header">
        <h3>Racine14 Creator</h3>
      </div>
      <div className="wrapper">
        <ul className="list">
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="profile">Profile</NavLink></li>
          <li><NavLink to="settings">Settings</NavLink></li>
          <li><NavLink to="about">About Us</NavLink></li>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar