import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import FacultySidebar from "./FacultySidebar";  // ✅ Import Faculty Sidebar

export default function Layout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // ✅ Redirect to login if user is not authenticated
        const user = localStorage.getItem("user");
        if (!user) {
            navigate("/");
        }
    }, [location.pathname, navigate]);

    return (
        <div className="App">
            {/* ✅ Show FacultySidebar only for faculty pages */}
            {location.pathname.startsWith("/faculty") ? (
                <FacultySidebar />
            ) : (
                location.pathname !== "/" && location.pathname !== "/logout" && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            )}

            <div className="main-content">{children}</div>
        </div>
    );
}
