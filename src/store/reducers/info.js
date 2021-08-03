import {UPDATE_INFO_SUCCESS} from "../actions/info";

const initialState = {
    todos:[],
}


export default function (state = initialState,action){
    switch (action.type){
        case UPDATE_INFO_SUCCESS: {
            let todos = state.todos.filter(t => t.id !== action.payload.id)
            todos.push(action.payload)
            return {
                ...state,
                todos
            }
        }
        default: {
            return state
        }
    }
}
