import React from "react"
import './Dashboard.css';
import { SidebarData } from './SidebarData';



export default function Dashboard(){
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) =>{
                    return(
                        <li key={key} 
                        className="row"
                        onClick={() => {window.location.pathname = val.link}}>

                            <div id="icon">{val.icon}</div>
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    );      
                })}
            </ul>
        </div>
    );
}