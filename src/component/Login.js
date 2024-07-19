import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import  {jwtDecode}  from "jwt-decode";
import logo from '../logo.png';
import './Login.css';

export default function Login() {
  const handleLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Decoded JWT:', decoded);
      // Redirect to dashboard or perform other actions after successful login
      window.location.href = "http://localhost:3000/dashboard";
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div className='Student'>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className='Loginh1'>
        One Credit Course Exemption Portal
      </h1>
      <p>
        Login with bitsathy gmail
      </p>
      <span>
        <GoogleLogin
          className='login-with-google-btn'
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </span>
    </div>
  );
}
