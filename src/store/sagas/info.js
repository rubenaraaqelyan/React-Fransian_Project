import { takeLatest, call, put } from 'redux-saga/effects'
import Api from '../../Api';
import {UPDATE_INFO_FAIL, UPDATE_INFO_REQUEST} from "../actions/info";

export default function* watcher() {
    yield takeLatest(UPDATE_INFO_REQUEST, updateTodo)
    yield takeLatest(UPDATE_INFO_REQUEST, updateTodos)
    yield takeLatest(UPDATE_INFO_REQUEST, updateServiceTodos)
}


function* updateTodo(action) {
    try {
        const { id } = action.payload
        const { data } = yield call(Api.updateAbout, id)

        yield put({
            type: UPDATE_INFO_REQUEST,
            payload: data.todo,
        });

    } catch (err) {
        yield put({
            type: UPDATE_INFO_FAIL,
            message: err.message,
        })
    }
}


function* updateServiceTodos(action) {
    try {
        const { id } = action.payload
        const { data } = yield call(Api.updateService, id)

        yield put({
            type: UPDATE_INFO_REQUEST,
            payload: data.todo,
        });

    } catch (err) {
        yield put({
            type: UPDATE_INFO_FAIL,
            message: err.message,
        })
    }
}


function* updateTodos(action) {
    try {
        const { id } = action.payload
        const { data } = yield call(Api.updateContacts, id)

        yield put({
            type: UPDATE_INFO_REQUEST,
            payload: data.todo,
        });

    } catch (err) {
        yield put({
            type: UPDATE_INFO_FAIL,
            message: err.message,
        })
    }
}


