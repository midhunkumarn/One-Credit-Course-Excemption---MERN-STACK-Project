import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import logo from '../logo.png';
import './Login.css';

export default function Login() {
const navigate = useNavigate(); 
const handleLoginSuccess = (credentialResponse) => {
try {
  const decoded = jwtDecode(credentialResponse.credential);
  console.log('Decoded JWT:', decoded);
  navigate('/dashboard'); 
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
        onSuccess={handleLoginSuccess}
        onError={handleLoginError} 
      />
    </div>
  </div>
  );
}
