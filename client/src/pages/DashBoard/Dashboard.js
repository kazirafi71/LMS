import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import MessageIcon from "@material-ui/icons/Message";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Dashboard.css";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  Card,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import Body4Card from "./Body4Card/Body4Card";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CourseCard from "./CourseCard/CourseCard";
import SideCalender from "../../components/Calender/SideCalender";
import RightSidebar from "./RightSidebar/RightSidebar";

import { useDispatch, useSelector } from "react-redux";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import { fetchCourseInfo } from "../../Redux/course/courseAction";

const Dashboard = () => {
  const [pageValue, setPageValue] = useState(5);
  const { user } = useSelector((state) => state.auth);
  const { courseInfo } = useSelector((state) => state.course);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    if (pageValue === "All") {
      dispatch(fetchCourseInfo());
      setPageValue(courseInfo.length);
    } else {
      dispatch(fetchCourseInfo());
    }
  }, [pageValue]);

  return (
    <div className="dashboard">
      <div className="left__sidebar__dashboard">
        <Sidebar Icon={DashboardIcon} title="Dashboard" link="/" />
        <Sidebar Icon={PersonIcon} title="Profile" link="/profile" />
        <Sidebar Icon={TouchAppIcon} title="Grades" link="/grades" />
        <Sidebar Icon={MessageIcon} title="Messages" link="/messages" />
        <Sidebar
          Icon={SettingsApplicationsIcon}
          title="Preferences"
          link="/preferences"
        />
        <Sidebar Icon={ExitToAppIcon} title="Logout" />
      </div>

      <div className="main__body__dashboard">
        <Container>
          <div className={styles.dashboard__header__name}>
            <h2 className={styles.dashboard__name}>{user && user.userName}</h2>
            <Link to="/">Dashboard</Link>
          </div>
        </Container>

        <div className="d-flex flex-wrap justify-content-md-between justify-content-md-end">
          <Body4Card
            link="/messages"
            shortTitle="Communicate"
            title="Message"
            Icon={MessageIcon}
          />
          <Body4Card
            link="/profile"
            shortTitle="Your Profile"
            title="Profile"
            Icon={AccountCircleOutlinedIcon}
          />
          <Body4Card
            link="/settings"
            shortTitle="Preferences"
            title="Settings"
            Icon={SettingsApplicationsIcon}
          />
          <Body4Card
            shortTitle="Performance"
            title="Grades"
            Icon={TouchAppIcon}
          />
        </div>

        <Container fluid className="my-5">
          <Row>
            <Col md={9} xs={12} sm={12}>
              <Container>
                <Button
                  className="my-2 mb-5"
                  color="primary"
                  variant="contained"
                >
                  Customize This Page
                </Button>
                <div>
                  <Row>
                    <Col>
                      <Paper className="d-flex justify-content-between align-items-center p-2 flex-wrap">
                        <Typography variant="h6">
                          Recently accessed courses
                        </Typography>

                        <div className={styles.icon__style}>
                          <IconButton
                            onClick={() => {
                              if (start==0 || end==0) {
                                setEnd(courseInfo.length);
                                setStart(courseInfo.length-1);
                              } else {
                               
                                setStart(start - 1);
                                setEnd(end - 1);
                              }
                              console.log(start,end)
                            }}

                          >
                            <ArrowBackIosIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              if (courseInfo.length == end) {
                                setStart(0);
                                setEnd(1);
                              } else {
                                setStart(start + 1);
                                setEnd(end + 1);
                              }
                            }}
                          >
                            <ArrowForwardIosIcon />
                          </IconButton>
                        </div>
                      </Paper>
                    </Col>
                  </Row>
                </div>

                <Divider />
                {courseInfo.length > 0 &&
                  courseInfo.slice(start, end).map((val) => {
                    return (
                      <CourseCard
                        key={Math.random(2) * 10}
                        title={val.courseDescription}
                        name={val.courseName}
                        id={val._id}
                        img={val.courseThumbnail}
                      />
                    );
                  })}
              </Container>

              <Container className="mt-5">
                <Paper className="d-flex justify-content-between align-items-center p-4">
                  <Typography variant="h6">Courses</Typography>
                </Paper>
                <Divider />

                {courseInfo.length > 0 &&
                  courseInfo.slice(0, pageValue).map((val) => {
                    return (
                      <CourseCard
                        key={Math.random(2) * 10}
                        title={val.courseDescription}
                        name={val.courseName}
                        id={val._id}
                        img={val.courseThumbnail}
                      />
                    );
                  })}

                <div className=" d-flex align-items-center my-2">
                  <Typography className="mr-3" variant="subtitle1">
                    Show
                  </Typography>
                  <select
                    className={styles.dropdown__style}
                    onChange={(e) => setPageValue(e.target.value)}
                  >
                    {[5, 10, 20, "All"].map((val) => {
                      return <option key={val}>{val}</option>;
                    })}
                  </select>
                </div>
              </Container>
            </Col>

            {/* TODO:Right Sidebar */}

            <Col className=" right__sidebar__dashboard " md={3} xs={12} sm={12}>
              <RightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
