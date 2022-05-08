import {StyleSheet, TextStyle, ImageStyle, ViewStyle} from 'react-native';
import {color, size, typography} from '../../../theme';
import {NORMAL, SIZE_14} from '../../../utils';
import {SIZE_12} from './../../../utils/global-styles/index';

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
  ...SIZE_14,
  textTransform: 'capitalize',
  marginTop: 5,
};

export const TASK_TEXT: TextStyle = {
  ...NORMAL,
  ...SIZE_12,
  textTransform: 'capitalize',
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
  padding: 5,
};

export const BACKGROUND: ViewStyle = {
  width: '100%',
  height: 10,
  backgroundColor: '#EBEBEB',
  borderRadius: 100,
};

export const STATUS: ViewStyle = {
  height: 10,
  backgroundColor: 'green',
  borderRadius: 100,
};
