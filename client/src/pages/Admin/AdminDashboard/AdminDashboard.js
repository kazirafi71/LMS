import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin";
import Styles from "./AdminDashboard.module.css";
import { Paper, Typography } from "@material-ui/core";

const AdminDashboard = () => {
  return (
    <div>
      <Row>
        <Col md={2}  sm={12} className={`d-none d-md-block ${Styles.adminSidebar}`} >
          <SidebarAdmin />
        </Col>
        <Col md={10} className={Styles.main__body} >
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
    </div>
  );
};

export default AdminDashboard;
