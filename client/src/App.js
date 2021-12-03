import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
//import Sidebar from "./components/Navbar/Sidebar";
import { TextField, Grid, Button, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "./App.css";
import {checkLoggedIn} from "./actions/auth";

const useStyles = makeStyles({
  container: {
    overflowX: "hidden",
    backgroundColor: "#e4e2f5",
    minHeight: "100vh",
    display: "flex",
    position: "relative",
  },
});

const App = () => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.pilot.loggedIn);
  
  useEffect(() => {  
      dispatch(checkLoggedIn());
      if(loggedIn != null){
        setloading(true);
      }
  }, [loggedIn]);


  const classes = useStyles();
  return (loading &&
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={loggedIn ? Dashboard : Login} />
        <Route path="/pvt" component={loggedIn ? Dashboard : Login} />
        <Route path="/pvt" component={loggedIn ? Dashboard : Login} />
        <Route path="/hesaplar/genel" component={loggedIn ? Dashboard : Login} />
        <Route path="/hesaplar/isletme" component={loggedIn ? Dashboard : Login} />
        <Route path="/hesaplar/etkinlik" component={loggedIn ? Dashboard : Login} />
        <Route path="/hesaplar/birikim" component={loggedIn ? Dashboard : Login} />
        <Route path="/hesaplar/pilot" component={loggedIn ? Dashboard : Login} />
        <Route path="/hesaplar/vakıf" component={loggedIn ? Dashboard : Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
