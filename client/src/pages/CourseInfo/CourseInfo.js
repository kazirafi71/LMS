import { Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import Styles from "./CourseInfo.module.css";

const CourseInfo = () => {
  return (
    <div>
      <div style={{backgroundColor:"#373B4D",padding:"50px 10px"}} className={Styles.courseName}>
        <Typography className="text-light text-center py-5"  variant='h4'>ANALYSIS AND DESIGN OF ALGORITHM</Typography>
      </div>
      <Container className='my-5'>
          <Paper className='p-3'>
          <div className={Styles.course__details}>
          <div className="d-flex justify-content-between align-items-center">
          <Typography variant='h6'>Course Content</Typography>
          <Typography style={{color:"GrayText"}} variant='subtitle2' >Course start date: 19/09/20 Category: Jan - Jun 2021</Typography>
          </div>
          
      </div>
          </Paper>
      </Container>
     
    </div>
  );
};

export default CourseInfo;
