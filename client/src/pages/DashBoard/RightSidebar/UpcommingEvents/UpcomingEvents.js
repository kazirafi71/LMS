import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Styles from "./UpcomingEvent.module.css";

const UpcomingEvents = ({ title, time, Icon }) => {
  return (
    <div className={Styles.event_row}>
      <div className={Styles.title__style}>
        <Icon />
        <Typography variant="subtitle1">{title}</Typography>
      </div>
      <Typography style={{ color: "gray" }} variant="subtitle1">
        {time}
      </Typography>
      <Divider/>
    </div>
  );
};

export default UpcomingEvents;
