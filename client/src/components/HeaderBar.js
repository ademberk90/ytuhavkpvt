import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { toggleSidebar } from "../actions/navbar";
import { makeStyles } from "@material-ui/core";
import pilot from "../assets/img/pilot.png";
import logo from "../assets/img/logo.png";
import { logout } from "../actions/auth";
import alertifyjs from "alertifyjs";

const useStyles = makeStyles({
  navbar: {
    //backgroundColor : "#3651d4",
  },
  userImage: {
    width: "2rem",
  },
  userName: {
    display: "inline-flex",
    alignItems: "center",
  },
  nav : {
    flexDirection : "row",
  },
  "@global": {
    ".dropdown-toggle::after": {
      color: "red",
      display: "none",
    },
    ".navbar-nav .dropdown-menu " : {
      position : "absolute",
    }
  },
});

const HeaderBar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.navbar.sidebarShow);
  const username = useSelector((state) => state.pilot.pilot.username);
  const logoutError = useSelector((state) => state.pilot.logoutError);

  const pilotLogout = () => {
    dispatch(logout(username));
  }
  useEffect(() => {;
    if(logoutError){
      alertifyjs.error(logoutError);
    }
  }, [logoutError]);
  const classes = useStyles();
  return (
    <Navbar bg="light" expand={false} sticky="top">
      <Container fluid>
        <Navbar.Toggle onClick={() => dispatch(toggleSidebar(!sidebarShow))} />
        <Navbar.Brand href="#">
      <img
        src={logo}
        width= "90"
        alt="YTUHAVK IT IS HERE"
      />
    </Navbar.Brand>
        <Nav className = {classes.nav}>
        <Navbar.Brand className={classes.userName}></Navbar.Brand>
        <NavDropdown
          align="end"
          title={
              <img className={classes.userImage} src={pilot} alt="user pic" />
          }
        >
          <NavDropdown.Item href="#">Profili Düzenle</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#" onClick={()=> pilotLogout()}>Çıkış Yap</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
