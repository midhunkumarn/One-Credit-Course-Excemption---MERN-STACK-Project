import React from 'react'

import './Header.css';


function Header() {
  return (
   <>
   <header>
    <nav>
        <div className="left">
            
        </div>
        <div className="right">
            <ul>
                <li>
                    <img src="/logo192.png" style={{width: "50px" , borderRadius: "50%" }} alt="" className="nav-image" />
                </li>
            </ul>
        </div>
    </nav>
   </header>
   </>
  );
}

export default Header