import React from 'react'
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/patientIntake">Patient Intake Form</Link>
      <Link to="/patientList">Patient List</Link>
      <Link to="/comments">Comment History</Link>
      <Link to="/privacyAgreement">Privacy Agreement</Link>
    </div>
  )
}

export default Navbar
