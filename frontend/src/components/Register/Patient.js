import React,{Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Register.css'
class Patient extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        phone_no:'',
        address:'',
        is_doctor:false,
        redirect:null,
      };
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      };
      handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('name', this.state.name);
        form_data.append('email', this.state.email);
        form_data.append('password', this.state.password);
        form_data.append('phone_no', this.state.phone_no);
        form_data.append('address', this.state.address);
        form_data.append('is_doctor', this.state.is_seller);
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/create/`;
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              this.setState({ redirect: "/login" });
            })
            .catch(err => {
              alert("Already Registered")
              console.log(err);
            })
      };
    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
        return (
            <div className="container-fluid" style={{marginTop:"3rem"}}>
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image1"></div>
                <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4">Register as a Patient!</h3>
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-label-group">
                            <input type="text" id="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Enter your name" required/>
                            <label for="name">Name</label>
                            </div>
                            <div className="form-label-group">
                            <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email address" required />
                            <label for="email">Email address</label>
                            </div>
        
                            <div className="form-label-group">
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required/>
                            <label for="password">Password</label>
                            </div>
                            <div className="form-label-group">
                            <input type="text" id="phone_no" value={this.state.phone_no} onChange={this.handleChange} className="form-control" placeholder="Enter your phone no" required />
                            <label for="phone_no">Phone No.</label>
                            </div>
                            <div className="form-label-group">
                            <input type="text" id="address" value={this.state.address} onChange={this.handleChange} className="form-control" placeholder="Enter your Address" required />
                            <label for="address">Address</label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Register</button>
        
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            
        );
    }

}
export default Patient;