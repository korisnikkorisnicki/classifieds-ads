import React from "react";
import { createStore, combineReducers } from "redux";

import uiReducer from "./reducers/ui";

const rootReducers = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducers);

export default store;
