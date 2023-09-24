// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Footers from './component/Footers';
import Headers from './component/Headers';
import Courses from './pages/Courses';
import Navbars from './component/Navbars';
import './App';





function App() {
   
  return (
    <Router >
      <Headers/>
      <Navbars/>
      <Routes>
        <Route path="/courses" element={<Courses/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
