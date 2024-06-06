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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top/>}></Route>
          {/* <Route path='/' element={<NavigationBar/>}></Route> */}
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/enquiry' element={<Enquiry/>}></Route>
          <Route path='/facilities' element={<Facilities/>}></Route>
          <Route path='/activities' element={<Activities/>}></Route>
          <Route path='/careers' element={<Career/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/feedback' element={<Feedback/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
