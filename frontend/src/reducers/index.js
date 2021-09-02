import updatelogin from "./auth";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:updatelogin
        updatelogin,
    }
);

export default reducers;