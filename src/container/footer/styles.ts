import {ViewStyle, TextStyle} from 'react-native';
import {color} from '../../theme';
import {ROW_SPACE} from '../../utils';

export const FOOTER_MAIN: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: -20,
  marginBottom: 100,
};

export const FOOTER_BUTTON: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 52,
  height: 52,
  borderWidth: 1,
  backgroundColor: '#F8F9FC',
  borderColor: '#EDEFF2',
  borderRadius: 26,
  marginHorizontal: 20,
};

export const TITLE: TextStyle = {
  color: color.dark,
  fontSize: 14,
  textAlign: 'center',
  marginBottom: 10,
};

export const CIRCLE_BOX: ViewStyle = {
  ...ROW_SPACE,
  marginTop: 30,
  marginLeft: 10,
};
