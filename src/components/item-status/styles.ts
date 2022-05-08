import {ViewStyle, TextStyle} from 'react-native';
import {BOLD, NORMAL, SIZE_16, SIZE_18} from '../../utils';

export const CONTAINER: ViewStyle = {
  alignSelf: 'flex-start',
  marginTop: 10,
  marginLeft: -15,
};
export const TXT: TextStyle = {
  ...NORMAL,
  ...SIZE_18,
  margin: 5,
  lineHeight: 18,
};
export const AMT: TextStyle = {
  ...BOLD,
  ...SIZE_16,
  margin: 5,
  lineHeight: 15,
  marginLeft: 25,
};
