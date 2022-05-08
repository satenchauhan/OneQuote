import {ViewStyle, TextStyle, ImageStyle, StyleSheet} from 'react-native';
import {color} from '../../theme/color';

export const MAIN: ViewStyle = {
  flex: 1,
  paddingHorizontal: 10,
  marginTop: 50,
};

export const USER_STYLE: ViewStyle = {
  flexDirection: 'row',
  marginLeft: 20,
  marginTop: 20,
};

export const TITLE: TextStyle = {
  marginBottom: 10,
  color: color.dark,
};

export const ADD_ICON: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 52,
  height: 52,
  borderWidth: 2,
  borderColor: color.dark,
  borderStyle: 'dotted',
  borderRadius: 26,
};
export const ADD_USERS: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 52,
  height: 52,
  borderWidth: 1,
  borderColor: color.dark,
  borderRadius: 26,
  marginHorizontal: 16,
};

export const PHOTO: ImageStyle = {
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
};

export const FLATSTYLE: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
};

export const TEXT: TextStyle = {
  color: color.black,
  alignSelf: 'center',
};
