//const express = require("express");
import express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pilotRoutes from "./routes/pilotRoutes.js";
import {notFound, errorHandler} from "./middlewares/errorMiddleware.js";
import session from "express-session";
import { verifyToken } from "./utils/generateToken.js";

const app = express();
app.use(session({
  key: "userId",
  secret: "secrets",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 24, // ms * sn * dk * saat = 1 gün
  }
}));
dotenv.config();

app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors({
  origin: ["http://localhost:3000", process.env.BASE_URL],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());

//app.use(notFound);
//app.use(errorHandler);

app.post("/api/registerPilot", pilotRoutes);
app.get("/api/login", verifyToken, pilotRoutes);
app.post("/api/login",pilotRoutes); //tmm
app.post("/api/logout", pilotRoutes); //tmm
app.post("/api/check-token",pilotRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is");
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
