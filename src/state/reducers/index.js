import { combineReducers } from "redux";
import clickOnMenuReducer from "./clickOnMenu";
import cocktailReducer from "./cocktailList-reducer";

//root reducer

const reducers = combineReducers({
  cocktails: cocktailReducer,
  clickOnMenu: clickOnMenuReducer,
});

export default reducers;
