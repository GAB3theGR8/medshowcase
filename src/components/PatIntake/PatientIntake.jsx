import "./PatientIntake.css";
import React, { useEffect, useState } from 'react';
import axios from "axios";

function PatientIntake() {
  const [input, setInput] = useState({
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      county: '',
      eirCode: '',
      historyNumber: '',
      chartNumber: '',
      patientNumber: '',
      pps: '',
      sex: '',
      race: '',
      dob: '',
      age: '',
      maritalStatus: '',
      insurance: '',
      admissionType: '',
      admissionSource: '',
      admittingDoctor: '',
      icd9: '',
      chiefComplaint: '',
  })    

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        
        const newComment = {
            timestamp: input.timestamp,
            comment: input.comment
        }

        axios.post("http://localhost:3001/create", newComment)               
    }

    const [patients, setPatients] = useState([{
      timestamp:'',
      comment: '',
    }])

    useEffect(() => {
      fetch("/patients").then(res => {
        if(res.ok) {
          return res.json()
        }
      }).then(jsonRes => setPatients(jsonRes));
    })

  return (
    <div className="intakeBody">
      <div className="patient-container">
        <h4>New Patient Registration</h4>
          <form>
            <div className="form first">
              <div className="details">
                <div className="fields">
                  <div className="input-field">
                    <input className="form-control" type="text" placeholder="History Number"></input>
                  </div>
                  <div className="input-field">
                    <input className="form-control" type="text" placeholder="Chart Number"></input>
                  </div>
                  <div className="input-field">
                    <input className="form-control" type="text" placeholder="Patient Number"></input>
                  </div>
                  <div className="input-field">
                    <input className="form-control" type="text" placeholder="PPS Number"></input>
                  </div>
                </div>
              <div className="addressIns">
                <div className="fields-column">
                  <div className="input-field">
                    <label>Patient Name</label>
                    <input className="form-control" type="text" placeholder="First Name"></input>
                    <input className="form-control" type="text" placeholder="Last Name"></input>
                  </div>
                  <div className="input-field">
                    <label>Address Line 1</label>
                    <input className="form-control" type="text" placeholder="Address Line 1"></input>
                  </div>
                  <div className="input-field">
                    <label>Address Line 2</label>
                    <input className="form-control" type="text" placeholder="Address Line 2"></input>
                  </div>
                  <div className="input-field">
                    <label>City</label>
                    <input className="form-control" type="text" placeholder="City"></input>
                  </div>
                  <div className="input-field">
                    <label>County</label>
                    <input className="form-control" type="text" placeholder="County"></input>
                  </div>
                  <div className="input-field">
                    <label>EIR Code</label>
                    <input className="form-control" type="text" placeholder="EIR Code"></input>
                  </div>
                </div>

                <div className="fields-column">
                  <div className="input-field">
                    <label>Sex</label>
                    <input className="form-control" type="text" placeholder="Sex"></input>
                  </div>
                  
                  <div className="input-field">
                    <label>Race</label>
                    <input className="form-control" type="text" placeholder="Race"></input>
                  </div>                  
                  <div className="input-field">
                    <label>Date of Birth</label>
                    <input className="form-control" type="date" placeholder="Date of Birth"></input>
                  </div>
                  <div className="input-field">
                    <label>Age</label>
                    <input className="form-control" type="text" placeholder="Age" maxLength="3" style={{width: "100px"}}></input>
                  </div>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Marital Status
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Single</a>
                      <a class="dropdown-item" href="#">Married</a>
                      <a class="dropdown-item" href="#">Widowed</a>
                    </div>
                  </div>
                </div>

                <div className="fields-column">
                  <div className="input-field">
                    <label>Insurance</label><br />
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label" for="exampleRadios1">
                          Yes
                        </label>
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                          No
                        </label>
                  </div>
                  <div className="input-field">
                    <label>Admission Type</label>
                    <input className="form-control" type="text" placeholder="Admission Type"></input>
                  </div>
                  <div className="input-field">
                    <label>Admission Source</label>
                    <input className="form-control" type="text" placeholder="Admission Source"></input>
                  </div>
                  <div className="input-field">
                    <label>Admitting Doctor</label>
                    <input className="form-control" type="text" placeholder="Admitting Doctor"></input>
                  </div>
                  <div className="input-field">
                    <label>ICD-9</label>
                    <input className="form-control" type="text" placeholder="ICD-9"></input>
                  </div>
                  <div className="input-field">
                    <label>Chief Complaint</label>
                    <input className="form-control" type="text" placeholder="Chief Complaint"></input>
                  </div>
                </div>
              </div>

                
              </div>
            </div>
            <div className='buttonSection'>
        <button onClick={handleClick} className='commentbtn btn btn-lg btn-info'>Submit</button>
        </div>
          </form>
      </div>
    </div>
  )
}

export default PatientIntake;