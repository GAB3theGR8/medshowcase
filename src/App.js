import './App.css';
import Privacy from './components/Privacy/Privacy';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import PatientIntake from './components/PatIntake/PatientIntake';
import PatientList from './components/PatList/PatientList';
import Comments from './components/Comments/Comments';
import Home from './Home';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <h1>MEDSTUFF</h1>
    </div>
    <Navbar />

      <Route path="/">
        <Home />
      </Route>
      <Route path="/patientIntake">
        <PatientIntake />
      </Route>
      <Route path="/patientList">
        <PatientList />
      </Route>
      <Route path="/comments">
        <Comments />
      </Route>
      <Route path="/privacyAgreement">
        <Privacy />
      </Route>
    </Router>
    
    

    <Privacy />
    </>
  );
}

export default App;
