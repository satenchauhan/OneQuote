import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, } from '../../../constants';
import AsyncStorage  from '@react-native-async-storage/async-storage';





export const userLogin = (data) => {
    return async (dispatch)  => {
        dispatch({
            type: LOGIN_LOADING,
        });
        try {
            if(!data){
                dispatch({
                    type: LOGIN_FAIL,
                    payload: 'Something went wrong'
                });
            }else{
                await AsyncStorage.setItem('user', JSON.stringify(data));
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: data,
                })
            }
        } catch (error){
            dispatch({
                type: LOGIN_FAIL,
                payload: 'Something went wrong'
            })
        }
    }
}
