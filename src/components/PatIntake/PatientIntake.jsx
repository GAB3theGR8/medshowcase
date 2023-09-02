import React, { useState } from 'react'

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
        icd9: '',
        chiefComplaint: '',
    })
  return (
    <div>
      <h4>Intake</h4>
    </div>
  )
}

export default PatientIntake;