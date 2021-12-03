import * as types from "./types";

export const toggleSidebar = (val) => {
    return {
        type: types.TOGGLE_SIDEBAR,
        payload: val
    }
}