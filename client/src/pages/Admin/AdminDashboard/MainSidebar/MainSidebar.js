import React from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import Styles from './MainSidebar.module.css'

const MainSidebar = () => {
    return (
        <div className={Styles.sideBar}>
            <div className={Styles.adminSidebar}>
         <SidebarAdmin/>
          </div>
        </div>
    );
};

export default MainSidebar;