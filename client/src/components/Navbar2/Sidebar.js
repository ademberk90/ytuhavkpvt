import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/img/logo2.png";
import pilot from "../../assets/img/pilot.png";
import "./Sidebar.css";
import { FaAngleLeft, FaAngleRight, FaRegUser } from "react-icons/fa";
import {
  IoIosLogOut,
  IoMdMenu,
  IoMdCloseCircle,
  IoMdClose,
} from "react-icons/io";
import { useHistory } from "react-router-dom";
import { sidebarElements, shortcutElements } from "./SidebarElements";
import { Route } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [menuIndex, setmenuIndex] = useState(0);
  const [backgroundTop, setbackgroundTop] = useState(0);
  const [backgroundHeight, setbackgroundHeight] = useState(53);
  const [submenuDisplay, setsubmenuDisplay] = useState(true);
  const [submenuIndex, setsubmenuIndex] = useState(null);
  const [lastbackgroundHeight, setlastbackgroundHeight] = useState(0);

  //const pilotInfo = useSelector((state) => state.pilot.pilot);
  const pilotInfo = JSON.parse(localStorage.getItem("pilot"));
  console.log(pilotInfo);
  const history = useHistory();

  const activeTabIndex = {
    top: backgroundTop,
    width: "100%",
    height: backgroundHeight,
    backgroundColor: "#3651d4",
    borderRadius: "10px",
    position: "absolute",
    left: "0",
    transition: "top 0.3s",
  };

  const mouseOnClick = () => {
    setSidebarToggle(!sidebarToggle);

    //Sidebar açarken
    if (sidebarToggle) {
      console.log("geldi");
      setsubmenuDisplay(true);
      setbackgroundHeight(lastbackgroundHeight);
    } else {
      // kapatırken
      setsubmenuDisplay(false);
      setbackgroundHeight(53);
    }
  };

  const changeBackground = (item, index) => {
    //submenu acıkken submenudisplay = false
    //sidebar acıkken sidebartoggle = false
    if (index === menuIndex) {
      setsubmenuDisplay(!submenuDisplay);
    } else {
      setsubmenuDisplay(true);
    }
    //Shortcut için
    if (index > 4) {
      setbackgroundTop(index * 53 + 45);
      setbackgroundHeight(53);
    } else {
      // Ana menü
      //Açık olan submenüyü kapatırken ya da sonra tekrar açarken ...
      if (index === menuIndex) {
        if (!sidebarToggle && !submenuDisplay && item.subNav) {
          setbackgroundTop(index * 53);
          const height = item.subNav.length * 30 + 53;
          setbackgroundHeight(height);
          setlastbackgroundHeight(height);
        } else {
          setbackgroundTop(index * 53);
          setbackgroundHeight(53);
        }
      }
      // submenu acık farketmeksizin başka menüye tıklayınca
      else {
        if (!sidebarToggle && !sidebarToggle && item.subNav) {
          setbackgroundTop(index * 53);
          const height = item.subNav.length * 30 + 53;
          setbackgroundHeight(height);
          setlastbackgroundHeight(height);
        } else {
          setbackgroundTop(index * 53);
          setbackgroundHeight(53);
        }
      }
    }
    setmenuIndex(index);
  };
  
  const logout = () => {
    localStorage.removeItem("pilot");
    history.push("/");

  }
  return (
    <div className={sidebarToggle ? "sidebar sidebar-shrink" : "sidebar"}>
      <div className="sidebar-top">
        <span className="shrink-button" onClick={() => mouseOnClick()}>
          <i>{sidebarToggle ? <FaAngleRight /> : <FaAngleLeft />}</i>
        </span>
        <img className="logo" src={logo} alt=""></img>
      </div>
      <div className="sidebar-links">
        <ul>
          <div style={activeTabIndex}></div>
          {sidebarElements.map((item, index) => {
            return (
              <li>
                <a
                  className={index === menuIndex ? "active" : ""}
                  href={item.path}
                  onClick={() => changeBackground(item, index)}
                >
                  <div className="icon">{item.icon}</div>
                  <span className="link hide">{item.title}</span>
                </a>
                <ul
                  className={
                    index === menuIndex && submenuDisplay
                      ? "submenu-display"
                      : ""
                  }
                >
                  {item.subNav &&
                    !sidebarToggle &&
                    item.subNav.map((subItem, subIndex) => {
                      return (
                        <li>
                          <a
                            className={
                              subIndex === submenuIndex ? "active" : ""
                            }
                            href={subItem.path}
                            onClick={() => setsubmenuIndex(subIndex)}
                          >
                            {" "}
                            <div className="icon">{subItem.icon}</div>
                            <span className="link hide">{subItem.title}</span>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
        <h4 class="hide">Shortcuts</h4>

        <ul>
          {shortcutElements.map((item, index) => {
            return (
              <li>
                <a
                  className={index + 5 === menuIndex ? "active" : ""}
                  href={item.path}
                  onClick={() => changeBackground(item, index + 5)}
                >
                  <div class="icon">{item.icon}</div>
                  <span class="link hide">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div class="sidebar-footer">
        <a
          href="#"
          className={sidebarToggle ? "account sidebar-shrink" : "account"}
        >
          <FaRegUser />
        </a>
        <div className="pilot">
          <div
            className={sidebarToggle ? "pilot-profile hide" : "pilot-profile"}
          >
            <img src={pilot} alt=""></img>
            <div class="pilot-info">
              <h3>{pilotInfo.firstname}</h3>
              <h5>Admin</h5>
            </div>
          </div>
          
          <a href="#" class="log-out" onClick={() => { logout() }}>
            <IoIosLogOut />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
