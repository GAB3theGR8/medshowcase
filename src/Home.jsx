import React from 'react'
import Privacy from './components/Privacy/Privacy';
import PatientIntake from './components/PatIntake/PatientIntake';
import PatientList from './components/PatList/PatientList';
import Comments from './components/Comments/Comments';
import Schedule from './components/Schedule/Schedule';

function Home() {
  return (
    <div>
    <PatientIntake />
    <PatientList />
    <Schedule />
    <Comments />
    <Privacy />
    </div>
  )
}

export default Home;