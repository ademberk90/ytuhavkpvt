import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import { sidebarElements, shortcutElements } from "./Navbar2/SidebarElements";
import { Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  sidebar: {
    position: "sticky",
    height: "calc(100vh - 56px)",
    top: "56px",
    backgroundColor: "rgb(248,249,250)",
    overflow: "hidden",
    color: "#b9bdca",
    fontWeight : "500",
  },
  navbarLink: {
    display: "flex",
    color: "#87878c",
    marginTop: "10px",
    transition : "none",
    '&:hover':{
      backgroundColor: "#0183ff",
      color: "#fff !important",
      borderRadius : "8px",
    }
  },
  mainRow: {
    marginTop: "5%",
  },
  shortcutRow: {
    marginTop: "30%",
  },
  icon: {
    fontSize: "1.3rem",
    textAlign: "center",
    minWidth: "2rem",
    display: "flex",
    alignItems: "center",
  },
  subNav: {
    paddingLeft: "1.7rem", 
  },
  subNavHide : {
    display : "none"
  },
  navBackground : {
    top: "50px",
    width: "100%",
    height: "100px",
    backgroundColor: "#3651d4",
    borderRadius: "10px",
    position: "absolute",
    left: "0",
    transition: "top 0.3s",
    zIndex : "-1",
  },
  '@global': {
    'a': {
         '&:active': {
            color: "#fff !important",
         },
         '&:focus': {
            color: "#87878c !important",
         },
    },
},
});

const Sidebar = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(0);
 
  const openSubNav = (subNavIndex) => {
      if(subMenuIndex === subNavIndex){
        setSubMenuIndex(-1);
      }
      else{
        setSubMenuIndex(subNavIndex);
      }
    
  }

  const classes = useStyles();
    return (
      <Container className={classes.sidebar}>
        <Row className={classes.mainRow}>
        {/*<div className={classes.navBackground}></div>*/}
          {sidebarElements.map((item, index) => {
            return (
              <>
                <Nav.Link className={classes.navbarLink} as={Link} to={item.path} onClick={()=> openSubNav(index)}>
                  <span className={classes.icon}>{item.icon}</span>
                  <span class="link hide">{item.title}</span>
                </Nav.Link>
                <div className={`${classes.subNav}  ${index === subMenuIndex ? "" : classes.subNavHide} `} >
                {item.subNav && 
                  item.subNav.map((subItem, subIndex) => {
                    return (
                      <Nav.Link className={classes.navbarLink} as={Link} to={subItem.path}>
                        <span className={classes.icon}>{subItem.icon}</span>
                        <span class="link hide">{subItem.title}</span>
                      </Nav.Link>
                    );
                  })}
                  </div>
              </>
            );
          })}
        </Row>
  
        <Row className={classes.shortcutRow}>
          <h4>Shortcuts</h4>
          {shortcutElements.map((item, index) => {
            return (
              <Nav.Link className={classes.navbarLink} href="#action1">
                <span className={classes.icon}>{item.icon}</span>
                <span class="link hide">{item.title}</span>
              </Nav.Link>
            );
          })}
        </Row>
      </Container>
    ); 
};

export default Sidebar;
