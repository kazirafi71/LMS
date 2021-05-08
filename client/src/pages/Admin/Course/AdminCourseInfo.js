import { Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainSidebar from "../AdminDashboard/MainSidebar/MainSidebar";
import AddCourse from "./AddCourse/AddCourse";
import Styles from "./AdminCourseInfo.module.css";
import Axios from "axios";
import CourseInfoTable from "./AddCourse/CourseInfoTable/CourseInfoTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseInfo } from "../../../Redux/course/courseAction";

const AdminCourseInfo = () => {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState(false);
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.course.courseInfo);

  useEffect(() => {
    dispatch(fetchCourseInfo());
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
                <AddCourse course={course} setCourse={setCourse} />
              </div>
            </Container>
            {course ? (
              <Container>
                <Row>
                  <CourseInfoTable course={course} setCourse={setCourse} />
                </Row>
              </Container>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminCourseInfo;
