import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../../actions"
import axios from 'axios';
function Navbar() {
  const isloggedin = useSelector(state => state.updatelogin);

  const dispatch = useDispatch();
  function loggedout(){
    //sents a logout request to backend &removes token from url
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/logout/`,{headers: {
      "Authorization": `token ${localStorage.getItem('token')}`
    }})
    localStorage.removeItem('token')
    dispatch(logout())

}
    return (
        
            <nav className="navbar navbar-expand-lg nnavbar-dark bg-dark">
              <Link className="navbar-brand" to="/">MEET YOUR DOCTOR</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                {isloggedin ?
                          <li className="nav-item">
                          <Link className="nav-link" to="/chats">Chats</Link>
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
                          <Link className="nav-link" onClick={loggedout}>Logout</Link>
                          </li>
                          :
                          <li className="nav-item">
                          <Link className="nav-link" to="/login">Login</Link>
                          </li>
                    }
                </ul>
              </div>
            </nav>
       
        
        
    );
}
export default Navbar;