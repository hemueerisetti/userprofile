import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ regNo, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('User data:', data.user); // Example: handle user data

      // Reset form after successful login
      setRegNo('');
      setPassword('');
      setLoginError('');

      // Redirect or handle login success in your React app
    } catch (error) {
      setLoginError('Invalid registration number or password. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} className="login-form">
        {loginError && <p className="error-message">{loginError}</p>}
        <label>
          Registration Number:
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        {/* <Link to="/userprofile"></Link> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
