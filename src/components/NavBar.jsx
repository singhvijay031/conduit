import "../assets/css/Navbar.css";

function NavBar() {
  return (
    <div className="nav">
      <h1 className="nav-title logo-font">Conduit</h1>
      <div className="nav-items">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Sign in</li>
            <li className="nav-item">Sign up</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
