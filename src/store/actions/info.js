export const UPDATE_INFO_REQUEST = 'UPDATE_INFO_REQUEST';
export const UPDATE_INFO_SUCCESS = 'UPDATE_INFO_SUCCESS';
export const UPDATE_INFO_FAIL = 'UPDATE_INFO_FAIL';

export function updateInfo( { id }){
    return {
        type: UPDATE_INFO_REQUEST,
        payload: { id },
    }
}


