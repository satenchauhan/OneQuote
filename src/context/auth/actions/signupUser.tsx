import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants";




export const clearAuthState = () => (dispatch) => {
    dispatch({
        type:CLEAR_AUTH_STATE,
    })
}



export default ({name,email,password}) => (dispatch) => (onSuccess) => {
    dispatch({
        type:REGISTER_LOADING
    });
}
