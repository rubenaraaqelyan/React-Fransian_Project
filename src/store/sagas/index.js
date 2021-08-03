import { fork, all }  from "redux-saga/effects";
import users from "./users";
import info from "../reducers/info";


export default function*  watchers(){
    return yield all([
        users,
        info
    ].map(fork))
}
