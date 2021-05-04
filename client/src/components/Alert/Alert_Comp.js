import React from "react";
import { Alert } from "react-bootstrap";

const Alert_Comp = ({ variant, msg }) => {
  return (
    <div>
      <Alert variant={variant}>{msg}</Alert>
    </div>
  );
};

export default Alert_Comp;
