import logo from './logo.png';
import './App.css';
import dash from './component/home';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function App() {
  return (
    <div className="App">
    
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          One Credit Course Excemption
                  Portal
        </h1>
        <p>
          Login with bitsathy
          gmail
        </p>
        <span>
       <GoogleLogin
  onSuccess={credentialResponse => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
       </span>
      </div>
     
    </div>
  );
}

export default App;
