import { Typography } from "@material-ui/core";
import React from "react";

const CommonHeader = ({title}) => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#373B4D", padding: "50px 10px" }}
      >
        <Typography className="text-light text-center py-5" variant="h4">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default CommonHeader;
