import { Link } from "react-router-dom"
const Navbar = () => {

  return (
    <nav className="navbar">
      <a href="/">Dashboard</a>

      <div className="right">
        <Link to="profile">
          <img src="" alt="Profile" />
        </Link>
        <ul>
          <li>
            <a href="#" className="danger">Logout</a>
          </li>
        </ul>
      </div>


    </nav>
  )
}

export default Navbar