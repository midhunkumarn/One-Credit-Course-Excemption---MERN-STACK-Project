import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import logo from './logo.png';
import './App.css';

export default function Login(){
    return(
        <div>
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
    );
}
