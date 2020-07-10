import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import countriesReducer from "./countriesReducer";
import worldReducer from "./worldReducer";
import nigeriaReducer from "./nigeriaReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  countries: countriesReducer,
  world: worldReducer,
  nigeria: nigeriaReducer
});

export default rootReducer;
