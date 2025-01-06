import React from 'react';
import { FaHome, FaGraduationCap, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

export const SidebarData = [
    {
        title: "Home",
        icon: <FaHome />,
        link: "/home",
    },
    {
        title: "Ongoing Courses",
        icon: <FaGraduationCap />,
        link: "/Ongoing",
    },
    {
        title: "Completed Courses",
        icon: <FaGraduationCap />,
        link: "/Completed",
    },
    {
        title:"Excemption",
        icon: <FaGraduationCap />,
        link: "/Excemption",
       
    },
    {
        title: "Profile",
        icon: <FaUserCircle />,
        link: "/profile",
    },
    {
        title: "Logout",
        icon: <FaSignOutAlt />,
        link: "/login",
    },
    
];
