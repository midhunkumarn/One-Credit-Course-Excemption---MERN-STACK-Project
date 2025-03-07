import React, { useState } from "react";
import CompletedCard from "./CompletedCard";
import Sidebar from "./Sidebar";

const Completed = () => {
    const [isOpen, setIsOpen] = useState(false); // ✅ Manage sidebar state

    return (
        <div className="completed-container">
            {/* ✅ Sidebar with toggle state */}
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            
            <div className="content">
                <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <CompletedCard />
            </div>
        </div>
    );
};

export default Completed;
