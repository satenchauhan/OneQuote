import {StyleSheet, Dimensions, ViewStyle, TextStyle} from 'react-native';
import {color} from '../../theme';
import {typography} from '../../theme/typography';
import {ROW_SELF_CENTER} from '../../utils';

export const TABBORDER: ViewStyle = {
  marginTop: 10,
  borderBottomWidth: 2,
};

export const TABS: ViewStyle = {
  marginHorizontal: 25,
};

export const HEADER_TABS: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 52,
  height: 52,
  borderRadius: 26,
  backgroundColor: color.white,
  borderWidth: 1,
  borderColor: '#EAEAEA',
  elevation: 2,
};

export const HEAEDR_TAB_NAME: TextStyle = {
  fontFamily: typography.Roboto_Bold,
  fontSize: 12,
  color: color.dark,
  textAlign: 'center',
  letterSpacing: 1,
};

export const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 10,
  },
  label: {
    fontSize: 22,
    color: color.dark,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
