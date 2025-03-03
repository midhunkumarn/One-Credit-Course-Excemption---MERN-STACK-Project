import React from 'react';
import { FaHome, FaGraduationCap, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export const SidebarData = [
    {
        title: "Home",
        icon: <FaHome />,
        link: "/faculty",
    },
    {
        title: "Pending",
        icon: <FaGraduationCap />,
        link: "/faculty/pending",
    },
    {
        title: "Approved",
        icon: <FaGraduationCap />,
        link: "/faculty/approved",
    },
    {
        title: "Rejected",
        icon: <FaGraduationCap />,
        link: "/faculty/rejected",
    },
    {
        title: "Overall",
        icon: <FaUserCircle />,
        link: "/faculty/all",
    },
    {
        title: "Logout",
        icon: <FaSignOutAlt />,
        link: null, // Prevent direct navigation
    },
];
