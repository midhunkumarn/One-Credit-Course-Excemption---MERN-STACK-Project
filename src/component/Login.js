import React from 'react';
import { GoogleLogin } from '@react-oauth/google'; // Ensure correct package and version
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import logo from '../logo.png';
import './Login.css';

export default function Login() {
  const navigate = useNavigate(); // Initialize navigate

  const handleLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Decoded JWT:', decoded);
      // Redirect to dashboard or perform other actions after successful login
      navigate('/dashboard'); // Use navigate to change routes
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='Loginh1'>One Credit Course Exemption Portal</h1>
        <p>Login with bitsathy gmail</p>
        <GoogleLogin
          onSuccess={handleLoginSuccess} // Ensure correct prop name
          onError={handleLoginError} // Ensure correct prop name
          // Additional props may be needed based on the library documentation
        />
      </div>
    </div>
  );
}
