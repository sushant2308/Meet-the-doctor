import React,{Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Register.css'
class Doctor extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        phone_no:'',
        address:'',
        speciality:'dentist',
        is_doctor:true,
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
        form_data.append('is_doctor', this.state.is_doctor);
        form_data.append('speciality', this.state.speciality);
        let url = `http://127.0.0.1:8000/api/create/`;
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
            <div className="container-fluid">
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image2"></div>
                <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4">Register as a Doctor!</h3>
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-label-group">
                            <input type="text" id="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Enter your name" required/>
                            <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-label-group">
                            <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email address" required />
                            <label htmlFor="email">Email address</label>
                            </div>
        
                            <div className="form-label-group">
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required/>
                            <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-label-group">
                            <input type="text" id="phone_no" value={this.state.phone_no} onChange={this.handleChange} className="form-control" placeholder="Enter your phone no" required />
                            <label htmlFor="phone_no">Phone No.</label>
                            </div>
                            <div className="form-label-group">
                            <input type="text" id="address" value={this.state.address} onChange={this.handleChange} className="form-control" placeholder="Enter your Address" required />
                            <label htmlFor="address">Address</label>
                            </div>
                            <div className="form-label-group">
                            <select className="form-control" id="speciality"  value={this.state.speciality} onChange={this.handleChange}>
                                <option value="dentist">Dentist</option>
                                <option value="dermatologist">Dermatologist</option>
                                <option value="general">General Physician</option>
                                <option value="ent">ENT</option>
                                <option value="gynaeologist">Gynaeologist</option>
                                <option value="ophthalmologist">Ophthalmologist</option>
                                <option value="orthopedic">Orthopedic</option>
                                <option value="pediatric">Pediatric</option>
                                <option value="physiotherapist">Physiotherapist</option>
                                <option value="psychiatrist">psychiatrist</option>
                                <option value="sexologist">Sexologist</option>
                                <option value="urologist">Urologist</option>
                            </select>
                            
                            </div>
                            <button className="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Register</button>
        
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
export default Doctor;