import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar () {
  return (
    <div>
        <nav className="navbar bg-dark container">
            <h4><Link className="link" to="/">Home</Link></h4>
            <h4><Link className="link" to="/patientIntake">Patient Intake Form</Link></h4>
            <h4><Link className="link" to="/patientList">Patient List</Link></h4>
            <h4><Link className="link" to="/comments">Comments</Link></h4>
            <h4><Link className="link" to="/privacyAgreement">Privacy Agreement</Link></h4>
        </nav>
    </div>
  )
}

export default Navbar
