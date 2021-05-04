import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ title, link, Icon }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="sidebar__dashboard__row">
      {title === "Logout" ? (
        <div>
          <Icon style={{ color: "gray", marginRight:"10px"}} />
          <Button
            onClick={() => {
              localStorage.clear("user");
              localStorage.clear("auth_token");
              dispatch({ type: "CLEAR__USER" });
              history.push("/login");
            }}
          >
            {title}
          </Button>
        </div>
      ) : (
        <Link to={`${link}`}>
          <Icon />
          {title}
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
