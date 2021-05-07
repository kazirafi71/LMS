import { Paper } from "@material-ui/core";
import React from "react";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
import Styles from "./MainSidebar.module.css";

const MainSidebar = () => {
  return (
    <div className={Styles.sideBar}>
      <div className={Styles.adminSidebar}>
          <Paper className="py-5 px-4 h-100 shadow ">
          <SidebarAdmin />
          </Paper>
        
      </div>
    </div>
  );
};

export default MainSidebar;
