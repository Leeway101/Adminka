import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className='container justify-content-center '>
      <div className="row bordered  d-flex justify-content-center py-5 ">
        <div className="col-xl-6 col-lg-6 col-md-6 mb-xl-4 mb-lg-4 mb-3">
          <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <div className="container-fluid justify-content-between py-2">
              <Link className="navbar-brand" to="/"><h2>Adminka</h2></Link>
              <div className="logaout">
                {location.pathname === '/home' && (
                  <button className="btn btn-outline-danger py-2" onClick={handleLogout}>Logout</button>
                )}
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
