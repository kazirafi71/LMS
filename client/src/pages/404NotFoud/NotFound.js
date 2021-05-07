import { Button, Typography } from "@material-ui/core";

import React from "react";
import { useHistory } from "react-router";
import Styles from "./Notfound.module.css";

const NotFound = () => {
    const history=useHistory()
  return (
    <div className={Styles.main__div}>
      <Typography className="text-center text-light" variant="h2">
        Oops!! <br />
        404 Not Found
      </Typography>
      <Button className='my-3' onClick={()=>{
          history.push('/admin-dashboard')
      }} variant="contained" color="primary">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
