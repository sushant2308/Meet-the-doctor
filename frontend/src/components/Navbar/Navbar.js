import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const [isloggedin, setisloggedin] =  useState(false)
    return (
        
            <nav className="navbar navbar-expand-lg nnavbar-dark bg-dark">
              <Link className="navbar-brand" to="/">MEET YOUR DOCTOR</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sign up
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <Link className="dropdown-item" to="/doctor-signup">Signup as Doctor</Link>
                      <Link className="dropdown-item" to="/patient-signup">Signup as Patient</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
       
        
        
    );
}
export default Navbar;