import React, { useState } from "react";
import ExcemptionCard from "./ExcemptionCard";
import Sidebar from "./Sidebar";

const Excemption = () => {
    const [isOpen, setIsOpen] = useState(false); // ✅ Manage sidebar state

    return (
        <div className="excemption-container">
            {/* ✅ Sidebar with toggle state */}
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="content">
                <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <ExcemptionCard />
            </div>
        </div>
    );
};

export default Excemption;
