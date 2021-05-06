import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin";
import Styles from "./AdminDashboard.module.css";
import { Paper, Typography } from "@material-ui/core";
import MainSidebar from "./MainSidebar/MainSidebar";

const AdminDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          md={2}
          sm={12}
          className={`d-none d-md-block`}
        >
          <MainSidebar/>
          
        </Col>
        <Col md={10} className={Styles.main__body}>
          <Container>
            <Paper>
              <Typography
                className="text-center text-primary py-5"
                variant="h4"
              >
                Welcome to Admin Dashboard
                
              </Typography>
            </Paper>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
