import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGOUT_USER } from "../../../constants";


export default () => (dispatch) => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({
    type: LOGOUT_USER,
  });
};
