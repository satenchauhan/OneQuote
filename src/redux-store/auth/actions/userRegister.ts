import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from '../../../constants/index';

import AsyncStorage from "@react-native-async-storage/async-storage";



interface UserData {
    name: string, 
    email: string, 
    phone: string, 
    password: string
}
// {name, email, phone, password}


export const clearAuthState = () => (dispatch) => {
    dispatch({
      type: CLEAR_AUTH_STATE,
    });
};

export const userRegister = (data) => {
    // console.log(data)
    return async (dispatch)  => {
        dispatch({
            type: REGISTER_LOADING,
        });
        try {
            if(!data){
                dispatch({
                    type: REGISTER_FAIL,
                    payload: 'Signup is being failed ! Error'
                });
            }else{
                await AsyncStorage.setItem('user', JSON.stringify(data));
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: data,
                })
            }
        } catch (error){
            dispatch({
                type: REGISTER_FAIL,
                payload: 'Signup is being failed ! Error'
            })
        }
    }
}