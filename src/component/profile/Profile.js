import React from 'react';
import './Profile.css';

const Profile = ({ name, active, department, gmail, phone, photo }) => {
    return (
        <div className="profile-container">
            <img src={photo} alt={`${name}'s profile`} className="profile-photo" />
            <h2 className="profile-name">{name}</h2>
            <p className="profile-status">{active ? 'Active' : 'Inactive'}</p>
            <p className="profile-department">Department: {department}</p>
            <p className="profile-email">
                Email: <a href={`mailto:${gmail}`}>{gmail}</a>
            </p>
            <p className="profile-phone">
                Phone: <a href={`tel:${phone}`}>{phone}</a>
            </p>
        </div>
    );
};

export default Profile;