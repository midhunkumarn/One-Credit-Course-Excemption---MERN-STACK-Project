import React, { createContext, useContext, useState } from "react";

const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
    const [pendingRequests, setPendingRequests] = useState([
        { id: 1, name: "Student A" },
        { id: 2, name: "Student B" },
    ]);
    const [approvedRequests, setApprovedRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);

    const handleApprove = (requestId) => {
        const requestToApprove = pendingRequests.find(req => req.id === requestId);
        if (!requestToApprove) return;

        setApprovedRequests([...approvedRequests, requestToApprove]);
        setPendingRequests(pendingRequests.filter(req => req.id !== requestId));
    };

    const handleReject = (requestId) => {
        const requestToReject = pendingRequests.find(req => req.id === requestId);
        if (!requestToReject) return;

        setRejectedRequests([...rejectedRequests, requestToReject]);
        setPendingRequests(pendingRequests.filter(req => req.id !== requestId));
    };

    return (
        <RequestContext.Provider value={{ pendingRequests, approvedRequests, rejectedRequests, handleApprove, handleReject }}>
            {children}
        </RequestContext.Provider>
    );
};

export const useRequests = () => useContext(RequestContext);
