import React from 'react';
import './ExemptionCountCard.css'; // Import the corresponding CSS

const ExemptionCountCard = ({ exemptionCount }) => {
    return (
        <div className="exemption-count-card">
            <h3 className="exemption-count-title">Exemptions</h3>
            <p className="exemption-count">{exemptionCount}</p>
        </div>
    );
};

export default ExemptionCountCard;