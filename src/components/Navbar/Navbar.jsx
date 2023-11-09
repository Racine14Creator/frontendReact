
const Navbar = () => {
  return (
    <nav className="navbar">
              <a href="/">Dashboard</a>
              <ul>
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#" className="danger">Logout</a>
                </li>
              </ul>
            </nav>
  )
}

export default Navbar