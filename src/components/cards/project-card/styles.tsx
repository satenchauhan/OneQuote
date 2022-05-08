import {StyleSheet, TextStyle, ImageStyle, ViewStyle} from 'react-native';
import {color, size, typography} from '../../../theme';
import {BOLD, NORMAL, ROW_SPACE} from '../../../utils';

export const CARDIMAGE: ImageStyle = {
  width: 199,
  height: 92,
  resizeMode: 'cover',
};
export const PHOTO: ImageStyle = {
  width: 90,
  height: '100%',
  resizeMode: 'cover',
};

export const TEXT: TextStyle = {
  ...NORMAL,
  fontSize: size[2],
  textTransform: 'capitalize',
  marginTop: 5,
};

export const CARDCONTAINER: ViewStyle = {
  flex: 1,
  width: 200,
  height: 185,
  marginRight: 15,
  borderWidth: 1,
  backgroundColor: '#FFFFFF',
  borderColor: 'rgba(0,0,0,0.12)',
  borderRadius: 8,
  overflow: 'hidden',
  shadowColor: '#000000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.8,
  shadowRadius: 3,
  elevation: 10,
};

export const FOOTER: ViewStyle = {
  ...ROW_SPACE,
  padding: 5,
  paddingRight: 5,
};
