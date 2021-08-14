import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const [isloggedin, setisloggedin] =  useState(false)
    return (
        <div>
          <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
              <div className="container">
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <Link className="navbar-brand text-brand" to="/"><span style={{color: '#00FED0'}}>MEET YOUR DOCTOR</span></Link>
                <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                  <ul className="navbar-nav">
                    {isloggedin ?
                          <li className="nav-item">
                          <Link className="nav-link" to="/profile">Account</Link>
                          </li>
                          :
                          <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sign-Up
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/doctor-signup">Signup as Doctor</Link>
                            <Link className="dropdown-item" to="/patient-signup">Signup as Patient</Link>
                          </div>
                        </li>
                    }
                    {isloggedin ?
                          <li className="nav-item">
                          <Link className="nav-link">Logout</Link>
                          </li>
                          :
                          <li className="nav-item">
                          <Link className="nav-link" to="/login">Login</Link>
                          </li>
                    }


                  </ul>
                </div>
                
              </div>
            </nav>
        </div>
        
        
    );
}
export default Navbar;