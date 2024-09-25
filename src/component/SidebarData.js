import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DetailsIcon from '@mui/icons-material/Details';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LogoutIcon from '@mui/icons-material/Logout'; // Import the Logout icon

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Details",
        icon: <DetailsIcon />,
        link: "/details"
    },
    {
        title: "Exemption", // Corrected the spelling here
        icon: <HistoryToggleOffIcon />,
        link: "/exemption"
    },
    {
        title: "Logout", // Add logout entry
        icon: <LogoutIcon />,
        link: "/logout" // Temporary, we'll handle it differently
    }
];
