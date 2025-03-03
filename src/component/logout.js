import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("user");  // ✅ Remove stored user data
        navigate("/");  // ✅ Redirect to login page
    }, [navigate]);

    return <h2>Logging out...</h2>;
}
