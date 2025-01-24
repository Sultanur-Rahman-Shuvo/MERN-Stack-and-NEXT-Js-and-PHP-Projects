import React, { useState } from 'react'
import { SidebarData } from './SidebarData';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`sidebar ${isOpen ? 'show' : 'hide'}`}>
            <div className="sidebar-header">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <div className={`arrow ${isOpen ? 'left' : 'right'}`}>
                    </div>
                </button>
                <div className='logo'>
                    <h2>{isOpen ? "Navigation Menu" : ""}</h2>
                </div>
            </div>
            <nav className="nav-menu">
                <ul>
                    {SidebarData?.map((item, index) => (
                        <li key={index}>
                            <a href={item.path}>
                                {item.icon}
                                {isOpen ? item.title : ""}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
