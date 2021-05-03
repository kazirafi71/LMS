import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = ({title,link,Icon}) => {
    
    return (
        <div className="sidebar__dashboard__row">
            <Link to={`${link}`}><Icon/>{title}</Link>
        </div>
    );
};

export default Sidebar; 