import './Sidebar.css';
import { SidebarData } from './FacultySidebarData';
import { useNavigate } from 'react-router-dom';

export default function FacultySidebar({ isOpen, setIsOpen }) {
    const navigate = useNavigate();

    return (
        <>
            <div className={`Sidebar ${isOpen ? "active" : ""}`}>
                <ul className="SidebarList">
                    {SidebarData.map((item, index) => (
                        <li 
                            key={index} 
                            className="row"
                            id={window.location.pathname === item.link ? "active" : ""}
                            onClick={() => {
                                if (setIsOpen) setIsOpen(false);
                                navigate(item.link);
                            }}
                        >
                            <div id="icon">{item.icon}</div>
                            <div id="title">{item.title}</div>
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && <div className="overlay active" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}
