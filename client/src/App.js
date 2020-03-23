import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './component/Home/Home';
import About from './component/About/About';
import Gallery from './component/Gallery/Gallery';
import PatientLogin from './component/Login/PatientLogin';
import DoctorLogin from './component/Login/DoctorLogin';
import EmployeeLogin from './component/Login/EmployeeLogin';
import AdministratorLogin from './component/Login/AdministratorLogin';
import Contact from './component/Contact/Contact';
import PatientHome from './component/Patient/PatientHome'
import PatHome from './component/Patient/PatHome'
import PatientAbout from './component/Patient/PatientAbout'
import PatientGallery from './component/Patient/PatientGallery'
import PatientContact from './component/Patient/PatientContact'
import Doctor from './component/Doctor/Doctor'
import DocGallery from './component/Doctor/DocGallery'
import Employee from './component/Employee/Employee'

import Admin from './component/Admin/Admin'
import AdHome from './component/Admin/AdHome'
import AdminAbout from './component/Admin/AdminAbout'
import AdminGallery from './component/Admin/AdminGallery';
import AdminContact from './component/Admin/AdminContact';

import PatientReg from './component/PatientReg/PatientReg';

import DocHome from './component/Doctor/DocHome';
import EmpHome from './component/Employee/EmpHome';
import EmpAbout from './component/Employee/EmpAbout';
import EmpGallery from './component/Employee/EmpGallery';
import EmpContact from './component/Employee/EmpContact';

import DocAbout from './component/Doctor/DocAbout';
import DocContact from './component/Doctor/DocContact';



function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/regPatient" component = {PatientReg}/>
      <Route exact path="/patient/login" component={PatientLogin} />
      <Route exact path="/doctors/login" component={DoctorLogin} />
      <Route exact path="/employee/login" component={EmployeeLogin} />
      <Route exact path="/administrator/login" component={AdministratorLogin} />


      <Route exact path="/patient/login/patient_home" component = {PatientHome} />
      <Route exact path="/patient/login/home" component = {PatHome} />
      <Route exact path="/patient/login/about" component = {PatientAbout} />
      <Route exact path="/patient/login/gallery" component = {PatientGallery} />
      <Route exact path="/patient/login/contact" component = {PatientContact} />
     

      
      <Route exact path="/doctors/login/doctor_home" component = {Doctor} />
      <Route exact path="/doctors/login/home" component = {DocHome} />
      <Route exact path="/doctors/login/about" component = {DocAbout}/>
      <Route exact path="/doctors/login/gallery" component = {DocGallery}/>
      <Route exact path="/doctors/login/contact" component = {DocContact}/>


      <Route exact path="/employee/login/employee_home" component = {Employee} />
      <Route exact path="/employee/login/home" component = {EmpHome}/>
      <Route exact path="/employee/login/about" component = {EmpAbout}/>
      <Route exact path="/employee/login/gallery" component = {EmpGallery}/>
      <Route exact path="/employee/login/contact" component = {EmpContact}/>

      <Route exact path="/administrator/login/admin_home" component = {Admin} />
      <Route exact path="/administrator/login/home" component = {AdHome}/>
      <Route exact path="/administrator/login/about" component = {AdminAbout}/>
      <Route exact path="/administrator/login/gallery" component = {AdminGallery}/>
      <Route exact path="/administrator/login/contact" component = {AdminContact}/>
    </Router>
    </div>
  );
}

export default App;
