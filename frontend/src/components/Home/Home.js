import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import dentist from '../../Images/Dentist.png'
import derma from '../../Images/Dermatologist.png'
import ent from '../../Images/ENT.png'
import general from '../../Images/General Physician.png'
import gynae from '../../Images/Gynaecologist.png'
import opth from '../../Images/Ophthalmologist.png'
import ortho from '../../Images/Orthopedic.png'
import pedia from '../../Images/Paediatrician.png'
import physio from '../../Images/Physiotherapist.png'
import physia from '../../Images/Psychiatrist.png'
import sex from '../../Images/Sexologist.png'
import uro from '../../Images/Urologist.png'

function Home() {
    return (
        <div className="container-fluid" >
            <h5 className="heading">Looking for a Specialist?</h5>
            <div className="row">
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/dentist"><img className="card-img-top" src={dentist} alt=""/></Link>
                        
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/dermatologist"><img className="card-img-top" src={derma} alt=""/></Link>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/general"><img className="card-img-top" src={general} alt=""/></Link>
                       
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/ent"><img className="card-img-top" src={ent} alt=""/></Link>
                       
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/gynaeologist"><img className="card-img-top" src={gynae} alt=""/></Link>
                        
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/ophthalmologist"><img className="card-img-top" src={opth} alt=""/></Link>
                     
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/orthopedic"><img className="card-img-top" src={ortho} alt=""/></Link>
                        
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/pediatric"><img className="card-img-top" src={pedia} alt=""/></Link>
                        
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/physiotherapist"><img className="card-img-top" src={physio} alt=""/></Link>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/psychiatrist"><img className="card-img-top" src={physia} alt=""/></Link>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/sexologist"><img className="card-img-top" src={sex} alt=""/></Link>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card">
                        <Link to="/speciality/urologist"><img className="card-img-top" src={uro} alt=""/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
