import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Grid, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { makeStyles } from "@material-ui/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Image from "../assets/img/loginBackground.jpg";
import { login } from "../actions/auth";
import alertifyjs from "alertifyjs";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0,98,204,1)",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "rgba(0,98,204,1)",
    },
  },
  gridContainer: {
    minHeight: "100vh",
    background: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  button: {
    backgroundColor: "rgba(0,98,204,0.65)",
    height: "2.5rem",
    margin: "10px auto",
    "&:hover": {
      backgroundColor: "rgba(0,98,204,1)",
    },
  },
  textField: {
    borderColor: "rgba(0,98,204,)",
  },
});

const loginFormSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.pilot.loggedIn);
  const loginError = useSelector((state) => state.pilot.loginError);
  const pilot = useSelector((state) => state.pilot.pilot);

  useEffect(() => {;
    if (loggedIn) {
        history.push("/home");
    }
    if(loginError != null ){
      alertifyjs.error(loginError);
    }
    if(pilot.success == "0"){
      alertifyjs.error(pilot.message);
    }
  }, [history,loggedIn,pilot,loginError]);

  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const clearForm = () => {
    reset();
  };
  const onSubmit = (userInfo) => {
    dispatch(login(userInfo));
    clearForm();
  };

  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.gridContainer}
      columnSpacing={{ xs: 7, sm: 4, md: 3 }}
    >
      <Grid item xs={6} sm={4} md={3}>
        <form noValidate autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Username"
            name="username"
            placeholder="Enter username"
            className={classes.root}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            {...register("username")}
          />
          <TextField
            label="Password"
            name="password"
            placeholder="Enter password"
            className={classes.root}
            variant="outlined"
            fullWidth
            required
            margin="normal"
            {...register("password")}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.button}
            onclick={() => handleSubmit(onSubmit())}
          >
            Sign in
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
