import './Login.css';
import React,{useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {login} from "../../actions"
import { useDispatch } from "react-redux";

function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [redirect, setredirect] = useState(null)
    const dispatch = useDispatch();
      const handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('email', email);
        form_data.append('password', password);
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/login/`;
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              //alert(res)
              localStorage.setItem('token',res.data.token);
              localStorage.setItem('userId',res.data.user.id);
              dispatch(login())
              setredirect("/");
            })
            .catch(err =>alert(err))
      };

        if (redirect) {
            return <Redirect to={redirect} />
          }

  return (
    <div className="container-fluid" style={{marginTop:""}}>
    <div className="row no-gutter">
        
        <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Login !</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-label-group">
                        <input type="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="Email address" required />
                        <label for="email">Email address</label>
                        </div>

                        <div className="form-label-group">
                        <input type="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" placeholder="Password" required/>
                        <label for="password">Password</label>
                        </div>
                        <button className="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Login</button>

                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    </div>
    </div>

  );
}

export default Login;