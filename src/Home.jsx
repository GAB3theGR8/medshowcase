import React from 'react'
import Privacy from './components/Privacy/Privacy';
import PatientIntake from './components/PatIntake/PatientIntake';
import PatientList from './components/PatList/PatientList';
import Comments from './components/Comments/Comments';
import Schedule from './components/Schedule/Schedule';

function Home() {
  return (
    <div>
      <h4>Home</h4>
    <PatientIntake />
    <PatientList />
    <Schedule />
    <Comments />
    <Privacy />
    </div>
  )
}

export default Home;