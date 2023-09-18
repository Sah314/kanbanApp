import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 import './App.css';
 import Login from './components/Auth/login';
 import Signup from './components/Auth/signup';
 import Navbarkanban from './components/Navbar/navbar';
function App() {


  return (
    <Router>
    <div className='App'>
    <Navbarkanban/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
