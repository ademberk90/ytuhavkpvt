import express  from "express";
import { registerPilot,authPilot, checkLoggedIn, logoutPilot }  from "../controllers/pilot.js";
//import authPilot from  "../controllers/authPilot.js";

const router = express.Router();

router.post("/api/registerPilot", registerPilot);
router.get("/api/login", checkLoggedIn );
router.post("/api/login", authPilot );
router.post("/api/logout", logoutPilot );
export default router;