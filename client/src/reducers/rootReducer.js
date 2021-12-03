import { combineReducers } from "redux";
import flightReducer from "./flight";
import pilotReducer from "./pilotReducer";
import navbarReducer from "./navbarReducer";

const rootReducer = combineReducers({
    flight: flightReducer,
    pilot: pilotReducer,
    navbar : navbarReducer,
});

export default rootReducer;