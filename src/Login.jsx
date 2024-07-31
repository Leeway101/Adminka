import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      alert('Login successful!');
      navigate('/home')

    } else {
      alert('Invalid username or password');
      setUsername('');
      setPassword('');
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <h2 className='text-center py-3'>Login</h2>
      <div className="mb-3 py-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          placeholder='Enter your username or email!'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          placeholder='Enter your password!'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      <button className="btn btn-secondary my-3" onClick={goToRegister}>
        Register
      </button>
    </div>
  );
}

export default Login;
