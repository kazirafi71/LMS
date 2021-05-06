import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainSidebar from "../AdminDashboard/MainSidebar/MainSidebar";
import AddCourse from "./AddCourse/AddCourse";
import Styles from "./AdminCourseInfo.module.css";
import Axios from "axios";
import CourseInfoTable from "./AddCourse/CourseInfoTable/CourseInfoTable";

const AdminCourseInfo = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const courseData = await Axios.get("/get-courses", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    });

    setData(courseData.data.courses);
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} sm={12} className={`d-none d-md-block`}>
            <MainSidebar />
          </Col>
          <Col md={10}>
            <Container>
              <Paper>
                <Typography
                  className="text-center text-primary py-5"
                  variant="h4"
                >
                  Course-Info
                </Typography>
              </Paper>
              <div className={Styles.add__course}>
                <AddCourse />
              </div>
            </Container>
            <Container>
              <Row>
                <CourseInfoTable  />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminCourseInfo;
