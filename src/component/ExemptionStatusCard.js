import React from 'react';
import './ExemptionStatusCard.css';

const ExemptionStatusCard = ({ status, date, time }) => {
    return (
        <div className="exemption-status-card">
            <h3 className="exemption-status-title">Exemption Status</h3>
            <p className={`exemption-status ${status === 'Approved' ? 'approved' : 'pending'}`}>
                {status}
            </p>
            <p className="exemption-date">Date: {date}</p>
        </div>
    );
};

export default ExemptionStatusCard;