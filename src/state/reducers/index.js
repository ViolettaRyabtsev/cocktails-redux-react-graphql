import { combineReducers } from "redux";

import cocktailReducer from "./cocktailList-reducer";

//root reducer

const reducers = combineReducers({
  cocktails: cocktailReducer,
});

export default reducers;
