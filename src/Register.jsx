import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully!');
    navigate('/login');
  };

  return (
    <div className="container">
      <h2 className='text-center text-bold'>Register</h2>
      <div className="mb-3 py-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          placeholder='Enter your Username or email'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;
