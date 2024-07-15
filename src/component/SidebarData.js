import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DetailsIcon from '@mui/icons-material/Details';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

export const SidebarData = [
    {
       title:"Home",
       icon:<HomeIcon/>,
       link:"/home"
      },
      {
        title:"Details",
        icon:<DetailsIcon/>,
        link:"/details"
       },
       {
        title:"Excemption",
        icon:<HistoryToggleOffIcon/>,
        link:"/excemption"
       },
]

