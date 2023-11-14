import { Link } from "react-router-dom"
import profile from "../../assets/profile.jpg"

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link href="/">Dashboard</Link>

      <div className="right">
        <Link to="profile">
          <img src={profile} alt="Profile" />
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