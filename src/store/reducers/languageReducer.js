const initialState = {
    language: 'FR'
}


export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {...state, language: action.payload}
        default:
            return state
    }
}
