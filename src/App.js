import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import NavigationBar from './components/Navbar';
import Top from './components/Top';
import Login from './components/Login';
import Enquiry from './components/Enquiry';
import Facilities from './components/Facilities';
import Activities from './components/Activities';
import Career from './components/Career';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import About from './components/About';
import StudSidebar from './components/students/studSidebar';
import LoginAs from './components/LoginAs';
import FacultySidebar from './components/Faculty/FacultySidebar';
import Attendance from './components/Faculty/Attendance';
import Dashboard from './components/Admin/AdminDash';
import AddStudent from './components/Admin/AddStud';
import AddFaculty from './components/Admin/AddFaculty';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top/>}></Route>
          {/* <Route path='/' element={<NavigationBar/>}></Route> */}
          <Route path='/login-as' element={<LoginAs/>}></Route>
          <Route path='/login/:role' element={<Login/>}></Route>
          <Route path='/enquiry' element={<Enquiry/>}></Route>
          <Route path='/facilities' element={<Facilities/>}></Route>
          <Route path='/activities' element={<Activities/>}></Route>
          <Route path='/careers' element={<Career/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/feedback' element={<Feedback/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/studentDashboard' element={<StudSidebar/>}></Route>
          <Route path='/facultyDashboard' element={<FacultySidebar/>}></Route>
          <Route path='/attendance' element={<Attendance/>}></Route>
          <Route path='/adminDashboard' element={<Dashboard/>}></Route>
          <Route path='/add-student' element={<AddStudent/>}></Route>
          <Route path='/add-faculty' element={<AddFaculty/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
