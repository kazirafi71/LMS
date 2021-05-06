import React from 'react';
import Styles from './SidebarAdmin.module.css'
import Sidebar  from '../../../../components/Sidebar/Sidebar'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const SidebarAdmin = () => {
    return (
        <div className={Styles.sidebarAdmin}>
            <Sidebar  title="Course" link="/admin/course-info" Icon={LocalLibraryIcon}/>
            <Sidebar  title="Student" link="/admin/student-info" Icon={LocalLibraryIcon}/>
            <Sidebar  title="Teacher" link="/admin/teacher-info" Icon={LocalLibraryIcon}/>
        </div>
    );
};

export default SidebarAdmin;