import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen }) {
    const navigate = useNavigate(); 

    if (typeof setIsOpen !== 'function') {
        console.error("setIsOpen is not a function. Make sure Sidebar is receiving the prop correctly.");
        return null;
    }

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        navigate('/logout'); 
    };

    return (
        <>
           
            <button className={`toggle-btn ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {isOpen && <div className="overlay active" onClick={() => setIsOpen(false)}></div>}

            <div className={`Sidebar ${isOpen ? "active" : ""}`}>
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => (
                        <li key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                setIsOpen(false); 
                                if (val.title === "Logout") {
                                    handleLogout(); 
                                } else {
                                    navigate(val.link); 
                                }
                            }}
                        >
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
