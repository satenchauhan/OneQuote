import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {border, color, size, spacing, typography} from '../../theme';

export const FULL: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  backgroundColor: color.white,
  padding: 10,
};

export const CONTAINER: ViewStyle = {
  flex: 1,
  paddingHorizontal: 10,
  marginTop: 20,
};

export const OVERLAYBOX: ViewStyle = {
  flex: 1,
  marginTop: 80,
  borderRadius: 6,
  backgroundColor: 'rgba(38, 40, 50, 0.8)',
  width: '100%',
  height: 400,
  paddingHorizontal: 10,
};

export const BTNBORDER: ViewStyle = {
  borderWidth: 2,
  borderRadius: 4,
  borderColor: 'rgba(1, 143, 106, 0.85)',
};

export const BTNFULL: ViewStyle = {
  borderWidth: 0,
  borderRadius: 4,
  backgroundColor: 'rgba(1, 143, 106, 0.85)',
};

export const ACTIVE: ViewStyle = {
  borderWidth: 0,
  borderRadius: 4,
  backgroundColor: 'rgba(1, 143, 106, 0.85)',
};

export const INACTIVE: ViewStyle = {
  borderWidth: 2,
  borderRadius: 4,
  borderColor: 'rgba(1, 143, 106, 0.85)',
};

export const SIZE_10: TextStyle = {
  fontSize: size[0],
};
export const SIZE_12: TextStyle = {
  fontSize: size[1],
};
export const SIZE_14: TextStyle = {
  fontSize: size[2],
};
export const SIZE_16: TextStyle = {
  fontSize: size[3],
};
export const SIZE_18: TextStyle = {
  fontSize: size[4],
};
export const SIZE_24: TextStyle = {
  fontSize: size[5],
};

export const BOLD: TextStyle = {
  fontFamily: typography.Roboto_Bold,
  color: color.dark,
};

export const NORMAL: TextStyle = {
  fontFamily: typography.Roboto_Reg,
  color: color.dark,
};

export const TITLE: TextStyle = {
  fontFamily: typography.Roboto_Bold,
  fontSize: size[4],
  color: color.dark,
};

export const LABEL: TextStyle = {
  fontFamily: typography.RCR,
  fontWeight: '400',
  color: '#E4E4E7',
  fontSize: 14,
};

export const ROW_LEFT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

export const ROW_RIGHT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',
};

export const ROW_CENTER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export const ROW_SPACE: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const ROW_SELF_CENTER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'center',
};

export const CELLVIEW: ViewStyle = {
  // marginTop: 25,
  width: 40,
  margin: 5,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 1.5,
  borderColor: 'rgba(228, 228, 231, 0.4)',
};

export const CELLTEXT: TextStyle = {
  fontFamily: typography.RCB,
  textAlign: 'center',
  fontSize: 25,
  color: 'rgba(228, 228, 231, 0.8)',
};
