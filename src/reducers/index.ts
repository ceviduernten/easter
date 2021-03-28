import {combineReducers} from "redux";
import formReducer from "./formReducer";
import huntLocationReducer from "./huntLocationReducer";
import huntCityReducer from "./huntCityReducer";
import currentUserReducer from "./currentUserReducer";

const rootReducer = combineReducers({
    form : formReducer as any,
    locations : huntLocationReducer as any,
    cities : huntCityReducer as any,
    currentUser : currentUserReducer as any
});

export default rootReducer;