import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/servicesPage';
import Find from './pages/Find';
import DoctorPage from './pages/DoctorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Booked from './pages/Booked';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/find' element={<Find/>}/>
          <Route path='/find/:id' element={<DoctorPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/booked' element={<Booked/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
