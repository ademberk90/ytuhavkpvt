import Pilot from "../models/pilot.js";
import {generateToken, verifyToken} from "../utils/generateToken.js";
import session from "express-session";

const registerPilot = async (req, res) => {
  const { username, firstname, lastname, email, password, isAdmin, pic } =
    req.body;

  const pilotsUsernameExists = await Pilot.findOne({ username });
  const pilotsEmailExists = await Pilot.findOne({ email });

  if (pilotsUsernameExists) {
    res.json({
      success: 0,
      message: "This Username Already Exists",
    });
  }
  if (pilotsEmailExists) {
    res.json({
      success: 0,
      message: "This Email Address Already Exists",
    });
  }
  if (!(pilotsUsernameExists || pilotsEmailExists)) {
    try {
      const pilot = await Pilot.create({
        username,
        firstname,
        lastname,
        email,
        password,
        pic,
      });

      res.status(201);
      res.json({
        success: 1,
        message: "Pilot is created succesfully",
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: 0,
        message: error,
      });
    }
  }
};

const authPilot = async (req, res) => {
  const { username, password } = req.body;
  const pilot = await Pilot.findOne({ username: username });
  if (pilot && (await pilot.matchPassword(password))) {
    const token = generateToken(pilot._id);
    await Pilot.updateOne({"username":pilot.username}, { $set : { "status" : true }});
    req.session.token = token;
    res.json({
      type: "success",
      loggedIn: true,
      pilot:{
        username: pilot.username,
        firstname: pilot.firstname,
        lastname: pilot.lastname,
      }
    });
  } else {
    res.json({
      type: "error",
      message: "Invalid Username or Password",
      loggedIn: false,
      pilot:{
        username: "",
        firstname: "",
        lastname: "",
      }
    });
  }
};

const checkLoggedIn = async (req, res) => {
    res.json({
      type:"success",
      loggedIn: true,
    });
};

const logoutPilot = async (req, res) => {
  //const { username} = req.body;
  //const pilot = await Pilot.findOne({ username: username });
  //await Pilot.updateOne({"username":pilot.username}, { $set : { "status" : false }});
  res.clearCookie('userId');
  res.json({
      type:"success",
      loggedIn: false,
    });
};

export { registerPilot, authPilot, checkLoggedIn, logoutPilot};
