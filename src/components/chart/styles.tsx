import {TextStyle} from 'react-native';
import {BOLD, SIZE_16} from './../../utils/global-styles/index';

export const TOTAL: TextStyle = {
  ...BOLD,
  ...SIZE_16,
  textAlign: 'center',
  position: 'absolute',
  top: 50,
  right: 35,
};
