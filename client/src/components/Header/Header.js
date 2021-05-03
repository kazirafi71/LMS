import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, IconButton } from '@material-ui/core';
import './Header.css'
import ClearIcon from '@material-ui/icons/Clear';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import NotesIcon from '@material-ui/icons/Notes';

const Header = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <div className="header">
      <div className="left__header">
        <Link to='/'>
        <img src="https://lms.bup.edu.bd/pluginfile.php/1/theme_edumy/headerlogo2/1618037325/bup-icon.png" alt=""/>
        <h4>LMS</h4>
        </Link>
      </div>
      <div className={`middle__header ${toggle ? `show__sidebar__nav` : `sidebar__nav`}`} >
          <ul>
            <li><NavLink to='/all-courses'>All Courses</NavLink></li>
            <li><NavLink to='/ucam'>UCAM</NavLink></li>
            <li><NavLink to='/dashboard'>BUP HOME</NavLink></li>
            <li><NavLink to='/library'>LIBRARY</NavLink></li>
          </ul>
      </div>
      <div className="right__header">
          <IconButton>
            <VisibilityOffIcon/>
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <SettingsIcon/>
          </IconButton>
          <Avatar>R</Avatar>
      </div>
      <div className="menu__toggle__icon mr-auto">
        <IconButton onClick={()=>setToggle(!toggle)} >
          {
            !toggle ? <NotesIcon fontSize="large"/> : 
            <ClearIcon fontSize="large"/> 
          }
          
          
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
