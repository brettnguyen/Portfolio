import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isNavbarOpen ? "show" : ""
            } justify-content-center`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={toggleNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Test" className="nav-link" onClick={toggleNavbar}>
                  Test
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;