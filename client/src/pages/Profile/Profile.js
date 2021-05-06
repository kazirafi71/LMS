import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./Profile.module.css";
import ToggleProfileInfo from "./ToggleProfileInfo/ToggleProfileInfo";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <CommonHeader title={user && user.userName && user.userName} />
      <div className={Styles.avatar}>
        <Avatar className={Styles.avatar__profile__pic} />
      </div>
      <Container fluid className="mb-5">
        <Row>
          <Col md={8}>
            <Paper className="p-5 m-3 shadow">
              <Typography
                className="text-center text-primary pb-4"
                variant="h5"
              >
                Your Profile Information
              </Typography>
              <ToggleProfileInfo
                exp={true}
                link="edit-profile"
                title="User details"
                value1="Edit profile"
                value2="Email address"
              />

              <ToggleProfileInfo
                link="privacy-policies"
                title="Privacy and policies"
                value1="Data retention summary"
              />

              <ToggleProfileInfo
                link="course-details"
                title="Course details"
                value1="Course details"
              />

              <ToggleProfileInfo
                link="learning-plans"
                title="Miscellaneous"
                value1="Blog entries"
                value2="Learning plans"
              />
              <ToggleProfileInfo
                link="grades"
                title="Reports"
                value1="Browser sessions"
                value2="Grades overview"
              />
              <ToggleProfileInfo
                title="Mobile app"
                value1="This site has mobile app access enabled.
            Download the mobile app."
              />
            </Paper>
          </Col>
          <Col md={4} className="">
            <Paper className="p-4 m-3 d-flex flex-column shadow">
              <Typography className="my-3 text-primary" variant="h5">
                Profile
              </Typography>
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Username
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.userName}
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Preferred language
              </Typography>
              <Typography variant="body1">English</Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                First access to site
              </Typography>
              <Typography variant="body1">
                Sunday, 14 February 2021, 8:44 AM
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Last access to site
              </Typography>
              <Typography variant="body1">
                Wednesday, 5 May 2021, 2:44 PM
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Email address
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.email}
              </Typography>
            </Paper>

            {
                user && user.role==="Student" &&  <Paper className="shadow p-4 d-flex flex-column m-3">
                <Typography className="my-3 text-primary" variant="h5">
                  Recent activity
                </Typography>
  
                <Typography
                  className="my-2"
                  style={{ color: "gray" }}
                  variant="body2"
                >
                  Courses I'm taking
                </Typography>
                <Typography variant="body1">9</Typography>
              </Paper>
                
              }

           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
