import {ImageStyle, ViewStyle} from 'react-native';
import {color} from '../../../theme';

export const PHOTO: ImageStyle = {
  width: 90,
  height: '100%',
  resizeMode: 'contain',
};

export const PHOTOCONTAINER: ViewStyle = {
  width: 90,
  height: 135,
  marginRight: 15,
  borderWidth: 1,
  backgroundColor: color.white,
  borderColor: 'rgba(0,0,0,0.12)',
  borderRadius: 8,
  overflow: 'hidden',
  // shadowColor: '#000000',
  // shadowOffset: {width: 0, height: 2},
  // shadowOpacity: 0.8,
  // shadowRadius: 3,
  // elevation: 10,
};
