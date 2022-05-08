import {ViewStyle} from 'react-native';
import {ROW_SELF_CENTER} from '../../utils';

export const FLOAT_BUTTON: ViewStyle = {
  ...ROW_SELF_CENTER,
  width: 150,
  height: 50,
  padding: 10,
  backgroundColor: '#10B0B0',
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  position: 'absolute',
  bottom: 62,
  zIndex: 3,
};

export const ADD_BUTTON: ViewStyle = {
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#FFFFFF',
};

export const CAMERA_BTN: ViewStyle = {
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor:'#FFFFFF',
};
