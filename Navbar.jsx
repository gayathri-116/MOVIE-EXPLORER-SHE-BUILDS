import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          Movie Explorer
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
