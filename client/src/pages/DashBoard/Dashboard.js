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
import courseData from "./FakeData.js/CourseData";

const Dashboard = () => {
  const [pageValue, setPageValue] = useState(5);
  const [courseCardData, setCourseData] = useState(courseData);

  useEffect(() => {
    if (pageValue == "All") {
      setCourseData(courseData);
    } else {
      let num = parseInt(pageValue);
      const newData = courseData.slice(0, num);
      setCourseData(newData);
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
        <Sidebar
          onClick={() => {
            alert("hi");
          }}
          Icon={ExitToAppIcon}
          title="Logout"
        />
      </div>

      <div className="main__body__dashboard">
        <Container>
          <div className={styles.dashboard__header__name}>
            <h2 className={styles.dashboard__name}>Kazi Musaddi Rafi</h2>
            <Link to="/">Dashboard</Link>
          </div>
        </Container>

        <div className="d-flex flex-wrap justify-content-center">
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
            <Col md={9} sm={12}>
              <Container>
                <Button
                  className="my-2 mb-5"
                  color="primary"
                  variant="contained"
                >
                  Customize This Page
                </Button>
                <Paper className="d-flex justify-content-between align-items-center p-4">
                  <Typography variant="h6">
                    Recently accessed courses
                  </Typography>

                  <div className={styles.icon__style}>
                    <IconButton>
                      <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </div>
                </Paper>
                <Divider />
                <CourseCard />
              </Container>

              <Container className="mt-5">
                <Paper className="d-flex justify-content-between align-items-center p-4">
                  <Typography variant="h6">Courses</Typography>
                </Paper>
                <Divider />

                {courseCardData &&
                  courseCardData.map(({ title, name }) => {
                    return (
                      <CourseCard
                        key={Math.random(2) * 10}
                        title={title}
                        name={name}
                        id={1}
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

            <Col md={3} xm={12}>
              <RightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
