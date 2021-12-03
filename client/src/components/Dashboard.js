import React, { useState, useEffect } from "react";
//import Sidebar from "./Navbar2/Sidebar";
import Pvt from "./Pvt";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../actions/auth";
import HeaderBar from "./HeaderBar";
import Sidebar from "./Sidebar";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Etkinlik from "./Hesaplar/Etkinlik";
import Genel from "./Hesaplar/Genel";
import Isletme from "./Hesaplar/Isletme";
import Pilot from "./Hesaplar/Pilot";
import Vakıf from "./Hesaplar/Vakıf";
import Birikim from "./Hesaplar/Birikim";

import Login from "./Login";

const useStyles = makeStyles({
  main: {
    padding:"25px",
  },
  sidebar: {
    maxWidth: "255px",
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row : {
    marginRight : 0,
  }
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.navbar.sidebarShow);
  const classes = useStyles();
  return (
    <>
      <Container fluid className={classes.container}>
        <HeaderBar />
        <Row className={classes.row}>
          {sidebarShow && (
            <Col xs={5} md={3} xl={2} className={classes.sidebar}>
              <Sidebar />
            </Col>
          )}
           {/* xs={sidebarShow ? 7 : 12} md={sidebarShow ? 9 : 12} xl={sidebarShow ? 10 : 12} */}
          <Col className={classes.main}>
            <Switch>
              <Route path="/pvt" component={Pvt} />
              <Route path="/hesaplar/genel" component={Genel} />
              <Route path="/hesaplar/isletme" component={Isletme} />
              <Route path="/hesaplar/etkinlik" component={Etkinlik} />
              <Route path="/hesaplar/birikim" component={Birikim} />
              <Route path="/hesaplar/pilot" component={Pilot} />
              <Route path="/hesaplar/vakıf" component={Vakıf} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
