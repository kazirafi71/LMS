import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ title, link, Icon ,admin }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="sidebar__dashboard__row">
      {title === "Logout" ? (
        <div className='d-flex align-items-center' >
          <Icon style={{ color: "gray", marginRight:"10px"}} />
          <Button
          style={{ color: "gray"}}
            onClick={() => {
              localStorage.clear("user");
              localStorage.clear("auth_token");
              dispatch({ type: "CLEAR__USER" });
              history.push("/login");
            }}
          >
            <span color=""> {title}</span> 
          </Button>
        </div>
      ) : (
        <Link  to={`${link}`}>
          <Icon />
          {title}
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
