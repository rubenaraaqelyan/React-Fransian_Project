import { combineReducers } from "redux";
import {languageReducer} from "./languageReducer";
import users from "./users";
import {reducer as formReducer} from 'redux-form'


export default combineReducers({
    languageReducer,
    users,
    form: formReducer,
})
