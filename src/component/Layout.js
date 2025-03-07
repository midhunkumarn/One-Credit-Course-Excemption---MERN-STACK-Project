import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import FacultySidebar from "./FacultySidebar";

export default function Layout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true); // Sidebar should be visible initially

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            navigate("/");
        }
    }, [location.pathname, navigate]);

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Show FacultySidebar for faculty pages, else show Student Sidebar */}
            {location.pathname.startsWith("/faculty") ? (
                <FacultySidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            ) : (
                location.pathname !== "/" && location.pathname !== "/logout" && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            )}

            {/* Push content to the right so sidebar doesn't overlap */}
            <div style={{ flex: 1, padding: "20px", marginLeft: isOpen ? "250px" : "0px", transition: "margin-left 0.3s ease" }}>
                {children}
            </div>
        </div>
    );
}
