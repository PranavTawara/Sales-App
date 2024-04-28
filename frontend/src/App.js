import React from 'react';
import NavBar from './component/Navbar';
import Addsales from './pages/Addsales';
import Topsales from './pages/Topsales';
import Login from './pages/Login'
import Register from './pages/Register';
import Totalrevenue from './pages/Totalrevenue';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route exact path="/addsales" element={<Addsales />}></Route>
          <Route exact path="/topsales" element={<Topsales />}></Route>
          <Route exact path="/totalrevenue" element={<Totalrevenue />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
